const NAV = [['O que entregamos', '#entregas'], ['Como trabalhamos', '#processo'], ['Exemplos', '#exemplos']];
function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <Brand />
        <nav className="nav" aria-label="Principal">
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <CtaButton size="sm">Fale conosco</CtaButton>
      </div>
    </header>
  );
}
window.Header = Header;
