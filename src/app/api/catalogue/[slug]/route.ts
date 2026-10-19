import {NextRequest} from 'next/server';
import {catalogueProxy} from '../proxy';
export async function GET(request:NextRequest,context:{params:Promise<{slug:string}>}){const {slug}=await context.params;return catalogueProxy(request,slug)}
