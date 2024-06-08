function formatPersianDate(
  date: Date | null | undefined,
  locale: string = "fa-IR",
): string {
  // Check if 'date' is null, undefined, or not a valid date
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return "Invalid or missing date"; // Or any other default value or action you prefer
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
}

export default formatPersianDate;
