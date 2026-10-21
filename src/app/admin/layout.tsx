import type { ReactNode } from "react";
import "./admin.css";

export const metadata={title:"Admin | Zeovus Herbs",robots:{index:false,follow:false}};
export default function AdminLayout({children}:{children:ReactNode}){return <><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"/><div className="admin-app">{children}</div></>}
