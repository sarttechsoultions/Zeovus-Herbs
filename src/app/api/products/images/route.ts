import {NextRequest,NextResponse} from 'next/server';
import {backendUrl} from '@/lib/server-config';
export async function POST(request:NextRequest){
 if(request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({message:'Origin not allowed'},{status:403});
 try{const form=await request.formData();const files=form.getAll('images');if(!files.length||files.length>20||files.some(f=>!(f instanceof File)||f.size>5*1024*1024))return NextResponse.json({message:'Choose up to 20 images, maximum 5 MB each.'},{status:400});
 const response=await fetch(`${backendUrl}/api/products/images`,{method:'POST',headers:{cookie:request.headers.get('cookie')||''},body:form,signal:AbortSignal.timeout(120000)});
 return new NextResponse(await response.text(),{status:response.status,headers:{'Content-Type':'application/json'}});
 }catch{return NextResponse.json({message:'Image upload failed. Please retry.'},{status:503});}
}
