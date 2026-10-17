import {NextRequest,NextResponse} from 'next/server';
import {backendUrl} from '@/lib/server-config';
export async function POST(request:NextRequest){
 if(request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({message:'Origin not allowed'},{status:403});
 if(Number(request.headers.get('content-length')||0)>11*1024*1024)return NextResponse.json({message:'Maximum upload size is 10 MB.'},{status:413});
 try{const data=await request.formData();const file=data.get('file');if(!(file instanceof File)||file.size>10*1024*1024)return NextResponse.json({message:'Select an Excel file up to 10 MB.'},{status:400});
 const response=await fetch(`${backendUrl}/api/products/import${request.nextUrl.search}`,{method:'POST',headers:{cookie:request.headers.get('cookie')||''},body:data,cache:'no-store',signal:AbortSignal.timeout(120000)});
 return new NextResponse(await response.text(),{status:response.status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
 }catch{return NextResponse.json({message:'The upload could not complete. Check the backend and retry; existing slugs will be skipped.'},{status:503});}
}
