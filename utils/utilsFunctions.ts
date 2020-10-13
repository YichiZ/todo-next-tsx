export function absoluteUrl(url: string) {
  return url.includes("localhost") ? `http://${url}` : `https://${url}`;
}
