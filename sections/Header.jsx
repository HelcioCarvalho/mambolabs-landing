const headerStyles = {
  bar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '14px 24px', background: 'rgba(250,249,245,0.86)', backdropFilter: 'blur(14px) saturate(1.4)', WebkitBackdropFilter: 'blur(14px) saturate(1.4)', borderBottom: '1px solid var(--border)' },
  inner: { width: '100%', maxWidth: 'var(--container-max)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
  logo: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text)', letterSpacing: '-0.02em' },
  nav: { display: 'flex', gap: 4, alignItems: 'center', padding: 4, borderRadius: 'var(--radius-pill)', background: 'var(--card)', border: '1px solid var(--border)' },
  link: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer', padding: '7px 14px', borderRadius: 'var(--radius-pill)' },
};
const NAV = [['Soluções', '#solucoes'], ['Como trabalhamos', '#jornada'], ['Aplicações', '#exemplos'], ['Sobre', '#sobre'], ['Contato', '#contato']];
function Header({ Button }) {
  return (
    <header style={headerStyles.bar}>
      <style>{`.mb-navlink:hover{background:var(--bg);color:var(--text)!important}`}</style>
      <div style={headerStyles.inner}>
        <a href="#topo" style={headerStyles.brand} aria-label="MomboLabs — início">
          <LogoMark alt="MomboLabs" />
          <span aria-hidden="true" style={headerStyles.logo}>Mombo<span style={{ color: 'var(--accent)' }}>Labs</span></span>
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
