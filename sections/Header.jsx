const headerStyles = {
  bar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '16px 24px', background: 'rgba(13,9,18,0.72)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-dark)' },
  inner: { width: '100%', maxWidth: 'var(--container-max)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  brand: { display: 'flex', alignItems: 'center', gap: 10 },
  logo: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--white-soft)', letterSpacing: '-0.01em' },
  nav: { display: 'flex', gap: 32, alignItems: 'center' },
  link: { fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary-dark)', textDecoration: 'none', cursor: 'pointer' },
};
const NAV = [['Soluções', '#solucoes'], ['Como trabalhamos', '#jornada'], ['Aplicações', '#exemplos'], ['Sobre', '#sobre'], ['Contato', '#contato']];
function Header({ Button }) {
  return (
    <header style={headerStyles.bar}>
      <div style={headerStyles.inner}>
        <span style={headerStyles.brand}>
          <LogoMark />
          <span style={headerStyles.logo}>Mambo<span style={{ color: 'var(--accent-500)' }}>Labs</span></span>
        </span>
        <nav style={headerStyles.nav}>
          {NAV.map(([label, href]) => <a key={href} href={href} style={headerStyles.link}>{label}</a>)}
        </nav>
        <Button variant="primary" size="sm" onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>Agendar diagnóstico</Button>
      </div>
    </header>
  );
}
window.Header = Header;
