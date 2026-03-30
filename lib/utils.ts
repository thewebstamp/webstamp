/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/utils.ts

import { NextRequest } from "next/server";

export function getClientInfo(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const userAgent = req.headers.get("user-agent") ?? "unknown";

  // Vercel geolocation (Edge only)
  const geo = (req as any).geo || {};
  const city = geo.city || null;
  const country = geo.country || null;

  return { ip, city, country, userAgent };
}
