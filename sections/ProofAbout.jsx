const proofStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 720, margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: '0 0 20px' },
  note: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-tertiary-dark)', margin: 0 },
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
  return (
    <div style={{ marginBottom: 28 }}>
      <PulseLine width={280} height={92} strokeWidth={2} id="aboutPulse" to="var(--accent-alt-500)" opts={{ chaosRatio: 0.5, tickEvery: 62, tickWidth: 22, steps: 40 }} />
    </div>
  );
}
function About() {
  const s = {
    section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
    inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)' },
    p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: '0 0 16px' },
    manifesto: { background: 'var(--surface-card-dark-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: 32, color: 'var(--white-soft)' },
    manifestoText: { fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: 19, lineHeight: 1.5, margin: '20px 0 0', letterSpacing: 'var(--tracking-tight)' },
  };
  return (
    <section id="sobre" style={s.section} data-screen-label="Sobre">
      <div className="mb-split" style={s.inner}>
        <div>
          <h2 style={s.h2}>Tecnologia deve simplificar a operação, não criar mais complexidade.</h2>
          <p style={s.p}>A MomboLabs nasceu para aproximar empresas das possibilidades reais da inteligência artificial e da automação. Unimos experiência em desenvolvimento de software, integração de sistemas, processos empresariais e IA.</p>
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
