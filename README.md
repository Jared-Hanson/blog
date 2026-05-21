# Blog

A lightweight Markdown blog built with Astro for fast writing and free deployment on Cloudflare Pages.

## Write a post

Create a new post scaffold:

```bash
npm run new -- "Post title"
```

That creates a Markdown file in `src/content/posts/`. Edit the file, then run the site locally:

```bash
npm install
npm run dev
```

## Content format

Each post lives in `src/content/posts/*.md` and uses this frontmatter:

```md
---
title: "Post title"
description: "One or two sentences that explain what this post is about."
date: 2026-05-20
updated: 2026-05-21
draft: false
tags:
  - writing
---
```

`updated`, `draft`, and `tags` are optional.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run new -- "Post title"
```

## Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project and connect the GitHub repo.
3. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. In Cloudflare Pages environment variables, set `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` if you want pageview tracking.
5. Enable Cloudflare Web Analytics for the project and copy its token into that environment variable.

After that, every push to `main` will trigger a new deployment.

