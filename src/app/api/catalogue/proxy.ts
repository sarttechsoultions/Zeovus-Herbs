import {NextRequest,NextResponse} from 'next/server';
import {backendUrl} from '@/lib/server-config';
export async function catalogueProxy(request:NextRequest,slug?:string){
 if(slug&&!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))return NextResponse.json({message:'Product not found'},{status:404});
 try{
 const response=await fetch(`${backendUrl}/api/products/catalogue${slug?'/'+slug:''}${request.nextUrl.search}`,{cache:'no-store',signal:AbortSignal.timeout(15000)});
 if(!response.headers.get('content-type')?.includes('application/json'))return NextResponse.json({message:'The product service returned an unexpected response. Please try again.'},{status:502});
 const data=await response.json();return NextResponse.json(data,{status:response.status,headers:{'Cache-Control':'no-store'}});
 }catch{return NextResponse.json({message:'Products are temporarily unavailable. Please try again.'},{status:503});}
}
