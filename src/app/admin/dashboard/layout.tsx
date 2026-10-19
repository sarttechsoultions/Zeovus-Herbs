import DashboardShell from "./DashboardShell";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { type ReactNode } from 'react';
async function AuthenticatedDashboard({children}:{children:ReactNode}){
 const token=(await cookies()).get('admin_session')?.value;
 if(!token)redirect('/admin/login');
 return <DashboardShell>{children}</DashboardShell>;
}
export default function DashboardLayout({children}:{children:ReactNode}){return <AuthenticatedDashboard>{children}</AuthenticatedDashboard>}
