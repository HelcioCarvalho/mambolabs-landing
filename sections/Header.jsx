const headerStyles = {
  bar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '14px 24px', background: 'rgba(236,238,240,0.82)', backdropFilter: 'blur(14px) saturate(1.4)', WebkitBackdropFilter: 'blur(14px) saturate(1.4)', borderBottom: '1px solid var(--hairline)' },
  inner: { width: '100%', maxWidth: 'var(--container-max)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
  logo: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--ink)', letterSpacing: '-0.02em' },
  nav: { display: 'flex', gap: 4, alignItems: 'center', padding: 4, borderRadius: 'var(--radius-pill)', background: 'var(--paper)', border: '1px solid var(--hairline)' },
  link: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none', cursor: 'pointer', padding: '7px 14px', borderRadius: 'var(--radius-pill)' },
};
const NAV = [['Soluções', '#solucoes'], ['Como trabalhamos', '#jornada'], ['Aplicações', '#exemplos'], ['Sobre', '#sobre'], ['Contato', '#contato']];
function Header({ Button }) {
  return (
    <header style={headerStyles.bar}>
      <style>{`.mb-navlink:hover{background:var(--canvas);color:var(--ink)!important}`}</style>
      <div style={headerStyles.inner}>
        <a href="#topo" style={headerStyles.brand} aria-label="MomboLabs — início">
          <LogoMark />
          <span style={headerStyles.logo}>Mombo<span style={{ color: 'var(--olive)' }}>Labs</span></span>
        </a>
        <nav style={headerStyles.nav}>
          {NAV.map(([label, href]) => <a key={href} href={href} className="mb-navlink" style={headerStyles.link}>{label}</a>)}
        </nav>
        <Button variant="primary" size="sm" onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>Agendar diagnóstico</Button>
      </div>
    </header>
  );
}
window.Header = Header;
