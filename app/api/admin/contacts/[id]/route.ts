// app/api/admin/contacts/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await req.json();
    const { id } = await params;

    if (!status || !['new', 'read', 'replied', 'archived'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    await query(
      `UPDATE contact_submissions 
       SET status = $1, updated_at = NOW() 
       WHERE id = $2`,
      [status, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating contact status:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}