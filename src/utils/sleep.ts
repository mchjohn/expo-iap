export function sleep(interval = 5000) {
  return new Promise((resolve) => setTimeout(resolve, interval));
}
