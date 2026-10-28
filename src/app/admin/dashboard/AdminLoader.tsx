import JsonLoader from '@/components/JsonLoader';
export default function AdminLoader({label="Loading workspace…",compact=false}:{label?:string;compact?:boolean}){return <div className="admin-loader"><JsonLoader label={label} compact={compact}/></div>}
