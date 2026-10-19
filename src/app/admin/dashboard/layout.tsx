import DashboardShell from "./DashboardShell";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { type ReactNode } from 'react';

// This protected area reads the session cookie for every request, so it must
// render on demand instead of being statically prerendered at build time.
export const instant = false;

async function AuthenticatedDashboard({children}:{children:ReactNode}){
 const token=(await cookies()).get('admin_session')?.value;
 if(!token)redirect('/admin/login');
 return <DashboardShell>{children}</DashboardShell>;
}
export default function DashboardLayout({children}:{children:ReactNode}){return <AuthenticatedDashboard>{children}</AuthenticatedDashboard>}

