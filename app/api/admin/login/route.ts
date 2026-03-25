// app/api/admin/login/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin_auth', 'true', { httpOnly: true, secure: true, sameSite: 'strict' });
    return response;
  }
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}