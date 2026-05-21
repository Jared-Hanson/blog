import fs from "node:fs";
import path from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run new -- "Post title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

if (!slug) {
  console.error("Could not generate a valid slug from that title.");
  process.exit(1);
}

const today = formatLocalDate(new Date());
const postsDir = path.join(process.cwd(), "src", "content", "posts");
const targetFile = path.join(postsDir, `${slug}.md`);

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

if (fs.existsSync(targetFile)) {
  console.error(`Post already exists: src/content/posts/${slug}.md`);
  process.exit(1);
}

const body = `---
title: "${escapeQuotes(title)}"
description: "Write a short summary here."
date: ${today}
draft: false
tags:
  - writing
---

Start writing here.
`;

fs.writeFileSync(targetFile, body, "utf8");
console.log(`Created src/content/posts/${slug}.md`);

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeQuotes(value) {
  return value.replace(/"/g, '\\"');
}

