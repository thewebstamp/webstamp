// app/api/track/time/route.ts

import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getOrCreateSessionId } from "@/lib/session";

export async function POST(req: NextRequest) {
  try {
    const { path, timeSpent } = await req.json();
    const sessionId = await getOrCreateSessionId();

    await query(
      `INSERT INTO user_activities (session_id, action_type, page_path, time_spent)
       VALUES ($1, 'time_spent', $2, $3)`,
      [sessionId, path, timeSpent],
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking time:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
