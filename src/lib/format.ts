const longDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
});

export function formatDate(date: Date) {
  return longDateFormatter.format(date);
}

