const messageFormarter = (
    name,
    lastname,
    message,
    email,
    number,
    street,
    location,
    nachrichtenFormat
) => {
  return nachrichtenFormat
    .replaceAll("[name]", name)
    .replaceAll("[lastname]", lastname)
    .replaceAll("[message]", message)
    .replaceAll("[email]", email)
    .replaceAll("[number]", number)
    .replaceAll("[street]", street)
    .replaceAll("[location]", location);
};

export default messageFormarter;
