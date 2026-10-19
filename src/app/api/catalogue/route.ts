import {NextRequest} from 'next/server';
import {catalogueProxy} from './proxy';
export async function GET(request:NextRequest){return catalogueProxy(request)}
