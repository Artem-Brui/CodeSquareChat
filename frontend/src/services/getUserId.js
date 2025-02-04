

export function getUserIdFromCookie(cookie, searchKey) {
  const result =
    cookie
      .split('; ')
      .find((item) => item.includes(searchKey))
      .split('=')[1]
      .split('%22')[1]
  return result;
}
