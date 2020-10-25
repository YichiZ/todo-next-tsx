export function absoluteUrl() {
  const url = process.env.VERCEL_URL as string;
  return url.includes("localhost") ? `http://${url}` : `https://${url}`;
}
