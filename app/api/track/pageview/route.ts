// app/api/track/pageview/route.ts

import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getClientInfo } from "@/lib/utils";
import { getOrCreateSessionId, updateSessionStats } from "@/lib/session";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer } = await req.json();
    const { ip, city, country, userAgent } = getClientInfo(req);

    // Get or create session ID
    const sessionId = await getOrCreateSessionId();

    // Parse device info from user agent
    const deviceInfo = parseUserAgent(userAgent);

    // Update session with device info if not already set
    await query(
      `UPDATE user_sessions 
       SET ip = COALESCE(ip, $1),
           city = COALESCE(city, $2),
           country = COALESCE(country, $3),
           user_agent = COALESCE(user_agent, $4),
           device_type = COALESCE(device_type, $5),
           browser = COALESCE(browser, $6),
           os = COALESCE(os, $7)
       WHERE session_id = $8`,
      [
        ip,
        city,
        country,
        userAgent,
        deviceInfo.device,
        deviceInfo.browser,
        deviceInfo.os,
        sessionId,
      ],
    );

    // Record page view
    await query(
      `INSERT INTO page_views (path, referrer, ip, city, country, user_agent, session_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [path, referrer || null, ip, city, country, userAgent, sessionId],
    );

    // Record user activity
    await query(
      `INSERT INTO user_activities (session_id, action_type, page_path)
       VALUES ($1, 'page_view', $2)`,
      [sessionId, path],
    );

    // Update session stats
    await updateSessionStats(sessionId, "page_view");

    return NextResponse.json({ success: true, sessionId });
  } catch (error) {
    console.error("Error tracking page view:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

function parseUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase();
  let device = "desktop";
  let browser = "unknown";
  let os = "unknown";

  if (ua.includes("mobile")) device = "mobile";
  else if (ua.includes("tablet")) device = "tablet";

  if (ua.includes("chrome")) browser = "chrome";
  else if (ua.includes("firefox")) browser = "firefox";
  else if (ua.includes("safari")) browser = "safari";
  else if (ua.includes("edge")) browser = "edge";

  if (ua.includes("windows")) os = "windows";
  else if (ua.includes("mac")) os = "mac";
  else if (ua.includes("linux")) os = "linux";
  else if (ua.includes("android")) os = "android";
  else if (ua.includes("ios")) os = "ios";

  return { device, browser, os };
}
