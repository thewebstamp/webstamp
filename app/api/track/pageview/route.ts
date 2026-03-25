// app/api/track/pageview/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getClientInfo } from '@/lib/utils';

export async function POST(req: NextRequest) {
  const { path, referrer } = await req.json();
  const { ip, city, country, userAgent } = getClientInfo(req);

  await prisma.pageView.create({
    data: { path, referrer, ip, city, country, userAgent },
  });

  return NextResponse.json({ success: true });
}