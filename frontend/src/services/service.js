export function capitaliser(string) {
  const first = string[0].toUpperCase();
  const second = string.slice(1).toLowerCase();

  return first + second;
}