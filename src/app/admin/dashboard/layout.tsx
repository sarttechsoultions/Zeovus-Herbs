import DashboardShell from "./DashboardShell";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense, type ReactNode } from 'react';
import { backendUrl } from '@/lib/server-config';
async function AuthenticatedDashboard({children}:{children:ReactNode}){
 const token=(await cookies()).get('admin_session')?.value;
 if(!token)redirect('/admin/login');
 let status=503;
 try{
  const response=await fetch(`${backendUrl}/api/admin/me`,{headers:{cookie:`admin_session=${encodeURIComponent(token)}`},cache:'no-store',signal:AbortSignal.timeout(15000)});
  status=response.status;
 }catch{}
 if(status===401)redirect('/admin/login');
 if(status!==200)return <section className="admin-surface" role="alert"><h2>{status===429?'Please wait a moment':'Unable to verify your session'}</h2><p>{status===429?'The server request limit was reached. Your session has not been cleared.':'The backend is temporarily unavailable. Your session has not been cleared.'}</p><a href="/admin/dashboard">Retry dashboard →</a></section>;
 return <DashboardShell>{children}</DashboardShell>;
}
export default function DashboardLayout({children}:{children:ReactNode}){return <Suspense fallback={<div className="admin-surface" role="status">Loading your workspace…</div>}><AuthenticatedDashboard>{children}</AuthenticatedDashboard></Suspense>}
