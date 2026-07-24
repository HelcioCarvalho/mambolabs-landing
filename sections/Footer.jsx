const fStyles = {
  section: { padding: '80px 24px 32px', background: 'var(--graphite-975)', borderTop: '1px solid var(--border-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 56 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
  logo: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--white-soft)' },
  tagline: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary-dark)', maxWidth: 260, lineHeight: 1.5 },
  colTitle: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-tertiary-dark)', marginBottom: 16 },
  link: { display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary-dark)', textDecoration: 'none', marginBottom: 10 },
  bottom: { display: 'flex', justifyContent: 'space-between', paddingTop: 28, borderTop: '1px solid var(--border-dark)', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-tertiary-dark)', flexWrap: 'wrap', gap: 12 },
};
function Footer() {
  return (
    <footer style={fStyles.section}>
      <div style={fStyles.inner}>
        <div style={fStyles.top}>
          <div>
            <div style={fStyles.brand}><LogoMark size={28} /><span style={fStyles.logo}>Mambo<span style={{ color: 'var(--accent-500)' }}>Labs</span></span></div>
            <p style={fStyles.tagline}>MamboLabs — Inteligência que transforma operações.</p>
          </div>
          <div>
            <div style={fStyles.colTitle}>Navegação</div>
            <a href="#solucoes" style={fStyles.link}>Soluções</a>
            <a href="#jornada" style={fStyles.link}>Como trabalhamos</a>
            <a href="#exemplos" style={fStyles.link}>Aplicações</a>
            <a href="#sobre" style={fStyles.link}>Sobre</a>
          </div>
          <div>
            <div style={fStyles.colTitle}>Contato</div>
            <a href="#contato" style={fStyles.link}>contato@mambolabs.com</a>
            <a href="#contato" style={fStyles.link}>WhatsApp</a>
            <a href="#" style={fStyles.link}>LinkedIn</a>
            <a href="#" style={fStyles.link}>Instagram</a>
          </div>
          <div>
            <div style={fStyles.colTitle}>Legal</div>
            <a href="#" style={fStyles.link}>Política de privacidade</a>
            <a href="#" style={fStyles.link}>Termos de uso</a>
          </div>
        </div>
        <div style={fStyles.bottom}>
          <span>© 2026 MamboLabs. Todos os direitos reservados.</span>
          <span>CNPJ: a definir</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
