export function isWhitespace(char) {
  return /\s/.test(char);
}

export function isAlphanumeric(char) {
  return /^[a-z0-9]+$/i.test(char);
}
