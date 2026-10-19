import { NextRequest, NextResponse } from 'next/server';
import { backendUrl } from '@/lib/server-config';
async function proxy(request:NextRequest,context:{params:Promise<{path?:string[]}>}){
 const {path=[]}=await context.params;
 if(path.length>1 || (path.length===1 && !['bulk-delete','bulk-publish'].includes(path[0]) && !/^[a-f\d]{24}$/i.test(path[0])))return NextResponse.json({message:'Invalid product ID'},{status:400});
 if(!['GET','HEAD'].includes(request.method)&&request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({message:'Origin not allowed'},{status:403});
 try{
 const response=await fetch(`${backendUrl}/api/products${path.length?'/'+path[0]:''}${request.nextUrl.search}`,{method:request.method,headers:{'Content-Type':'application/json',cookie:request.headers.get('cookie')||''},body:['POST','PUT','PATCH'].includes(request.method)?await request.text():undefined,cache:'no-store',signal:AbortSignal.timeout(15000)});
 return new NextResponse(await response.text(),{status:response.status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
 }catch{return NextResponse.json({message:'Unable to reach the product server. Please try again.'},{status:503});}
}
export {proxy as GET,proxy as POST,proxy as PATCH,proxy as PUT,proxy as DELETE};


