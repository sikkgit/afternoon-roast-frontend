const getFormattedDate = (date) => {
  date = new Date(date);
  const month = date.toLocaleString("default", { month: "long" });

  return `${month} ${date.getDate() + 1}, ${date.getFullYear()}`;
};
export { getFormattedDate };
