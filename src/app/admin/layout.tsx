import type { ReactNode } from "react";
import "./admin.css";
export const metadata={title:"Admin | Zeovus Herbs",robots:{index:false,follow:false}};
export default function AdminLayout({children}:{children:ReactNode}){return <div className="admin-app">{children}</div>}
