const proofStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', maxWidth: 720 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 20px', letterSpacing: '-0.02em' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: '0 0 20px' },
  note: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-tertiary-dark)', fontStyle: 'italic', margin: 0 },
};
function Proof() {
  return (
    <section style={proofStyles.section} data-screen-label="Prova e credibilidade">
      <div style={proofStyles.inner}>
        <h2 style={proofStyles.h2}>Soluções desenvolvidas para funcionar no mundo real.</h2>
        <p style={proofStyles.p}>Cada projeto nasce de um problema concreto e é construído para se integrar à rotina, aos dados e aos sistemas da empresa.</p>
        <p style={proofStyles.note}>Estudos de caso e depoimentos de clientes serão publicados aqui à medida que forem concluídos.</p>
      </div>
    </section>
  );
}
function AboutIllustration() {
  const chaos = [[16, 18], [42, 46], [22, 66], [50, 26], [60, 56], [28, 84]];
  return (
    <svg viewBox="0 0 150 100" width="150" height="100" style={{ display: 'block', marginBottom: 24 }}>
      <defs>
        <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" />
          <stop offset="100%" stopColor="var(--accent-alt-500)" />
        </linearGradient>
      </defs>
      {chaos.map(([x, y], i) => chaos.slice(i + 1).map(([x2, y2], j) => (
        <line key={i + '-' + j} x1={x} y1={y} x2={x2} y2={y2} stroke="var(--graphite-700)" strokeWidth="1" opacity="0.6" />
      )))}
      {chaos.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill="var(--slate-500)" />)}
      <path d="M66,50 C90,50 100,50 118,50" stroke="url(#aboutGrad)" strokeWidth="2" fill="none" />
      <circle cx="128" cy="50" r="16" fill="url(#aboutGrad)" />
      <path d="M122,50 l4,4 8,-9" stroke="var(--graphite-950)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function About() {
  const s = {
    section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
    inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 20px', letterSpacing: '-0.02em' },
    p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: '0 0 16px' },
    manifesto: { background: 'var(--surface-card-dark-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: 32, color: 'var(--white-soft)' },
    manifestoText: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.5, margin: '20px 0 0' },
  };
  return (
    <section id="sobre" style={s.section} data-screen-label="Sobre">
      <div style={s.inner}>
        <div>
          <h2 style={s.h2}>Tecnologia deve simplificar a operação, não criar mais complexidade.</h2>
          <p style={s.p}>A MamboLabs nasceu para aproximar empresas das possibilidades reais da inteligência artificial e da automação. Unimos experiência em desenvolvimento de software, integração de sistemas, processos empresariais e IA.</p>
          <p style={s.p}>Nosso trabalho começa pelo entendimento do negócio. A tecnologia vem depois, como instrumento para reduzir fricção, organizar informações e criar novas possibilidades de crescimento.</p>
        </div>
        <div style={s.manifesto}>
          <AboutIllustration />
          <p style={s.manifestoText}>Não acreditamos em IA aplicada apenas para acompanhar tendências. Acreditamos em tecnologia conectada a processos, dados e objetivos reais.<br /><br />Menos tarefas manuais. Menos sistemas isolados. Mais inteligência em operação.</p>
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
window.About = About;
