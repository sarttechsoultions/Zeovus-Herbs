import {NextRequest,NextResponse} from 'next/server';
import {backendUrl} from '@/lib/server-config';
export async function GET(_request:NextRequest,context:{params:Promise<{filename:string}>}){
 const {filename}=await context.params;if(!/^[a-f0-9-]{36}\.(png|jpg|webp|gif)$/.test(filename))return new NextResponse(null,{status:404});
 try{const response=await fetch(`${backendUrl}/uploads/products/${filename}`,{signal:AbortSignal.timeout(15000)});if(!response.ok)return new NextResponse(null,{status:response.status});return new NextResponse(response.body,{headers:{'Content-Type':response.headers.get('content-type')||'application/octet-stream','Cache-Control':'public, max-age=86400','X-Content-Type-Options':'nosniff'}});}catch{return new NextResponse(null,{status:503});}
}
