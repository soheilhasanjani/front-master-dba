const getDateAgo = (updateDate: number): string => {
  const yearsAgo =
    updateDate / 30 / 12 >= 1
      ? Math.round(updateDate / 30 / 12) + " " + "سال"
      : "";
  const monthAgo =
    (updateDate / 30) % 12 >= 1
      ? Math.round((updateDate / 30) % 12) + " " + "ماه"
      : "";
  const daysAgo =
    updateDate >= 1 && updateDate <= 29
      ? Math.round(updateDate) + " " + "روز"
      : "";
  return `${yearsAgo} ${monthAgo} ${daysAgo}`;
};

export default getDateAgo;
