// app/api/track/click/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getClientInfo } from '@/lib/utils';
import { getOrCreateSessionId, updateSessionStats } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const { element, path } = await req.json();
    const { ip, city, country, userAgent } = getClientInfo(req);
    const sessionId = await getOrCreateSessionId();
    
    await query(
      `INSERT INTO clicks (element, path, ip, city, country, user_agent, session_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [element, path, ip, city, country, userAgent, sessionId]
    );
    
    // Record user activity
    await query(
      `INSERT INTO user_activities (session_id, action_type, page_path, element)
       VALUES ($1, 'click', $2, $3)`,
      [sessionId, path, element]
    );
    
    await updateSessionStats(sessionId, 'click');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}