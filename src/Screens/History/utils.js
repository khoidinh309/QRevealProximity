export const DateTransform = (date) => {
  const parsedDatetime = new Date(date);

  // Format the datetime as hh:mm dd/mm/yyyy
  const formattedDatetime =
    ("0" + parsedDatetime.getHours()).slice(-2) +
    ":" +
    ("0" + parsedDatetime.getMinutes()).slice(-2) +
    " " +
    ("0" + parsedDatetime.getDate()).slice(-2) +
    "/" +
    ("0" + (parsedDatetime.getMonth() + 1)).slice(-2) +
    "/" +
  parsedDatetime.getFullYear();

  return formattedDatetime;
}