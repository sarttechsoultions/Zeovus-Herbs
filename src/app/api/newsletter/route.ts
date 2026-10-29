import { NextRequest, NextResponse } from 'next/server';
import { backendUrl } from '@/lib/server-config';
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (typeof body.email !== 'string' || body.email.length > 254) return NextResponse.json({message:'Please enter a valid email address.'}, {status:400});
    const response = await fetch(`${backendUrl}/api/newsletter`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email:body.email}), signal:AbortSignal.timeout(15000) });
    if (!response.ok) return NextResponse.json({message:'Unable to subscribe. Please try again.'}, {status:response.status});
    const data = await response.json();
    if (!data.success) throw new Error('Subscription failed');
    return NextResponse.json(data);
  } catch { return NextResponse.json({message:'Unable to subscribe. Please try again.'}, {status:503}); }
}
