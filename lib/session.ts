// lib/session.ts

import { cookies } from 'next/headers';
import { query } from './db';
import { v4 as uuidv4 } from 'uuid';

export async function getOrCreateSessionId() {
  const cookieStore = await cookies();
  let sessionId = cookieStore.get('webstamp_session')?.value;
  
  if (!sessionId) {
    sessionId = uuidv4();
    // Set cookie for 30 days
    cookieStore.set('webstamp_session', sessionId, {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'lax',
    });
    
    // Create session in database
    await query(
      `INSERT INTO user_sessions (session_id, first_seen, last_seen)
       VALUES ($1, NOW(), NOW())`,
      [sessionId]
    );
  } else {
    // Update last seen
    await query(
      `UPDATE user_sessions 
       SET last_seen = NOW() 
       WHERE session_id = $1`,
      [sessionId]
    );
  }
  
  return sessionId;
}

export async function updateSessionStats(sessionId: string, type: 'page_view' | 'click') {
  const field = type === 'page_view' ? 'page_views_count' : 'clicks_count';
  await query(
    `UPDATE user_sessions 
     SET ${field} = ${field} + 1, last_seen = NOW()
     WHERE session_id = $1`,
    [sessionId]
  );
}

export async function getUserSessionInfo(sessionId: string) {
  const session = await query<{
    session_id: string;
    first_seen: Date;
    last_seen: Date;
    page_views_count: number;
    clicks_count: number;
    country: string | null;
    device_type: string | null;
  }>(
    `SELECT * FROM user_sessions WHERE session_id = $1`,
    [sessionId]
  );
  
  return session[0] || null;
}

export async function getAllUserSessions(limit: number = 50) {
  return await query<{
    session_id: string;
    first_seen: Date;
    last_seen: Date;
    page_views_count: number;
    clicks_count: number;
    country: string | null;
    device_type: string | null;
  }>(
    `SELECT * FROM user_sessions 
     ORDER BY last_seen DESC 
     LIMIT $1`,
    [limit]
  );
}