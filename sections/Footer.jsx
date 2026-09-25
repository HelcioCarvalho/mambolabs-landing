const fStyles = {
  section: { padding: '72px 24px 28px', background: 'var(--dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 56 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 },
  tagline: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--on-dark-2)', maxWidth: 260, lineHeight: 1.5, margin: 0 },
  colTitle: { fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 },
  link: { display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--on-dark-2)', textDecoration: 'none', marginBottom: 10 },
  bottom: { display: 'flex', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid var(--border-on-dark)', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--on-dark-3)', flexWrap: 'wrap', gap: 12 },
};
function Footer() {
  return (
    <footer style={fStyles.section}>
      <style>{`.mb-flink:hover{color:var(--accent)!important}`}</style>
      <div style={fStyles.inner}>
        <div className="mb-grid-4" style={fStyles.top}>
          <div>
            <div style={fStyles.brand}><img src="./images/mombolabs-logo-dark.webp" alt="MomboLabs" width="148" height="145" style={{ display: 'block', height: 'auto' }} /></div>
            <p style={fStyles.tagline}>MomboLabs — Inteligência que transforma operações.</p>
          </div>
          <div>
            <div style={fStyles.colTitle}>Navegação</div>
            <a href="#solucoes" className="mb-flink" style={fStyles.link}>Soluções</a>
            <a href="#jornada" className="mb-flink" style={fStyles.link}>Como trabalhamos</a>
            <a href="#exemplos" className="mb-flink" style={fStyles.link}>Aplicações</a>
            <a href="#sobre" className="mb-flink" style={fStyles.link}>Sobre</a>
          </div>
          <div>
            <div style={fStyles.colTitle}>Contato</div>
            <a href="mailto:contato@mombolabs.com" className="mb-flink" style={fStyles.link}>contato@mombolabs.com</a>
            <a href="#contato" className="mb-flink" style={fStyles.link}>WhatsApp</a>
          </div>
          <div>
            <div style={fStyles.colTitle}>Legal</div>
            <a href="./privacidade.html" className="mb-flink" style={fStyles.link}>Política de privacidade</a>
            <a href="./termos.html" className="mb-flink" style={fStyles.link}>Termos de serviço</a>
            <a href="./exclusao-de-dados.html" className="mb-flink" style={fStyles.link}>Exclusão de dados</a>
          </div>
        </div>
        <div style={fStyles.bottom}>
          <span>© 2026 MomboLabs. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
