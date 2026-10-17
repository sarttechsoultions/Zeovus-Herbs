/** Server-only configuration shared by every Next.js API proxy and admin check. */
export const backendUrl = (process.env.BACKEND_URL ?? "http://localhost:5000").replace(/\/$/, "");

