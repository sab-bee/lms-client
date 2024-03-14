export function cookie(cookieName, cookieValue, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${cookieName}= ${cookieValue} ; ${expires} ; path=/ `;
}

export function clearCookie(cookieName) {
  document.cookie = `${cookieName} = ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
}
