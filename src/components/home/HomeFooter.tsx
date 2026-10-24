const columns = [["Solutions", "Botanical Extracts", "Biotics & Ferments", "Plant Proteins", "Specialty Lipids", "Custom Phytocomplexes"], ["Science & Quality", "Clinical Research", "Standardisation Protocols", "Farm Traceability", "ZQA Quality Assurance"], ["Company", "About Us", "Science", "Blog", "Contact"], ["Contact & Offices", "India Headquarters", "Global Access Hub", "Singapore"]];

export function HomeFooter() {
  return <footer className="site-footer"><div className="site-footer__brand"><img src="/home-assets/imgWhatsAppImage20260925At1446382.png" alt="Zeovus Herbs" /><i>Plants With Purpose.</i><p>Clinically studied botanical and natural ingredients connecting India with the world through rigorous standardized science and global pharmaceutical standards.</p><small>● ASSAY VERIFIED • ISO 17025 COMPLIANT</small></div>{columns.map(([title, ...links]) => <div className="site-footer__column" key={title}><b>{title}</b>{links.map(link => <a key={link} href={link === "About Us" ? "/about" : link === "Contact" ? "/contact" : link === "Science" ? "/science" : "/#home"}>{link}</a>)}</div>)}<p className="site-footer__legal">© 2026 ZEOVUS GROUP INTERNATIONAL &nbsp; • &nbsp; PRIVACY POLICY &nbsp; TERMS OF USE</p></footer>;
}




