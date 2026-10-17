import { NextRequest, NextResponse } from 'next/server';
import { backendUrl } from '@/lib/server-config';
async function proxy(request: NextRequest, context: {params:Promise<{action:string}>}) {
 const {action}=await context.params;
 if(!['login','logout','me','dashboard'].includes(action)) return NextResponse.json({message:'Not found'},{status:404});
 if(request.method==='POST' && request.headers.get('origin') !== request.nextUrl.origin) return NextResponse.json({message:'Origin not allowed'},{status:403});
 try {
 const backend=backendUrl;
 const response=await fetch(`${backend}/api/admin/${action}`,{method:request.method,headers:{'Content-Type':'application/json',cookie:request.headers.get('cookie') || ''},body:request.method==='POST'?await request.text():undefined,cache:'no-store',signal:AbortSignal.timeout(15000)});
 const result=new NextResponse(await response.text(),{status:response.status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
 const retryAfter=response.headers.get('retry-after');if(retryAfter)result.headers.set('Retry-After',retryAfter);
 const cookie=response.headers.get('set-cookie');if(cookie)result.headers.set('set-cookie',cookie);
 return result;
 }catch{return NextResponse.json({message:'Unable to reach the admin server. Please try again.'},{status:503});}
}
export {proxy as GET,proxy as POST};


