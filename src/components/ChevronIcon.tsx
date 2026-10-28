export default function ChevronIcon({up=false}:{up?:boolean}) {
  return <svg className="ui-chevron-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={up?{transform:'rotate(180deg)'}:undefined}><path d="m6 9 6 6 6-6"/></svg>;
}
