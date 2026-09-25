const proofStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--paper)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 64, alignItems: 'end' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 },
  note: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, padding: '20px 22px', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--hairline-strong)', background: 'var(--canvas)' },
};
function Proof() {
  return (
    <section style={proofStyles.section} data-screen-label="Prova e credibilidade">
      <div className="mb-split" style={proofStyles.inner}>
        <div>
          <h2 style={proofStyles.h2}>Soluções desenvolvidas para funcionar no mundo real.</h2>
          <p style={proofStyles.p}>Cada projeto nasce de um problema concreto e é construído para se integrar à rotina, aos dados e aos sistemas da empresa.</p>
        </div>
        <p style={proofStyles.note}>Estudos de caso e depoimentos de clientes serão publicados aqui à medida que forem concluídos.</p>
      </div>
    </section>
  );
}
function AboutIllustration() {
  return (
    <div style={{ marginBottom: 24 }}>
      <PulseLine width={280} height={80} strokeWidth={2.25} id="aboutPulse" from="#7C8A3A" to="#2A2B22" opts={{ chaosRatio: 0.5, tickEvery: 62, tickWidth: 22, steps: 40 }} />
    </div>
  );
}
function About() {
  const s = {
    section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--canvas)' },
    inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 24px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
    p: { fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 16px' },
    manifesto: { background: 'var(--lime-soft)', borderRadius: 'var(--radius-xl)', padding: 36, color: 'var(--night)' },
    manifestoText: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, lineHeight: 1.45, margin: 0, letterSpacing: '-0.015em' },
    closing: { fontFamily: 'var(--font-accent)', fontSize: 13, lineHeight: 1.7, margin: '24px 0 0', paddingTop: 20, borderTop: '1px solid rgba(42,43,34,.18)' },
  };
  return (
    <section id="sobre" style={s.section} data-screen-label="Sobre">
      <div className="mb-split" style={s.inner}>
        <div>
          <h2 style={s.h2}>Tecnologia deve simplificar a operação, não criar mais complexidade.</h2>
          <p style={s.p}>A MomboLabs nasceu para aproximar empresas das possibilidades reais da inteligência artificial e da automação. Unimos experiência em desenvolvimento de software, integração de sistemas, processos empresariais e IA.</p>
          <p style={s.p}>Nosso trabalho começa pelo entendimento do negócio. A tecnologia vem depois, como instrumento para reduzir fricção, organizar informações e criar novas possibilidades de crescimento.</p>
        </div>
        <div className="mb-reveal" style={s.manifesto}>
          <AboutIllustration />
          <p style={s.manifestoText}>Não acreditamos em IA aplicada apenas para acompanhar tendências. Acreditamos em tecnologia conectada a processos, dados e objetivos reais.</p>
          <p style={s.closing}>Menos tarefas manuais. Menos sistemas isolados. Mais inteligência em operação.</p>
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
window.About = About;
