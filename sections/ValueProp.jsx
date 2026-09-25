const valueStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--lime-soft)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 24px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--night)', margin: 0, opacity: 0.86 },
  pillars: { display: 'flex', flexDirection: 'column', gap: 12 },
  pillar: { display: 'grid', gridTemplateColumns: '132px 1fr', gap: 20, alignItems: 'baseline', padding: '22px 24px', borderRadius: 'var(--radius-lg)', background: 'var(--paper)', border: '1px solid var(--hairline)' },
  label: { fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--olive)', margin: 0 },
  pillarTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--ink)', margin: '0 0 6px' },
  pillarText: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 },
};
const PILLARS = [
  ['Onde olhar', 'Estratégia', 'Identificamos os processos em que tecnologia e IA podem gerar resultados concretos.'],
  ['O que construir', 'Tecnologia', 'Selecionamos e desenvolvemos as ferramentas, integrações e modelos adequados para cada necessidade.'],
  ['Como sustentar', 'Implementação', 'Colocamos a solução para funcionar dentro da operação, com validação, acompanhamento e melhoria contínua.'],
];
function ValueProp() {
  return (
    <section style={valueStyles.section} data-screen-label="Proposta de valor">
      <div className="mb-split" style={valueStyles.inner}>
        <div>
          <h2 style={valueStyles.h2}>Não instalamos apenas ferramentas. Construímos soluções para a sua operação.</h2>
          <p style={valueStyles.p}>Cada empresa possui processos, sistemas e objetivos diferentes. Por isso, a MomboLabs começa entendendo como a operação funciona, onde estão os gargalos e quais oportunidades podem gerar maior impacto. A partir desse diagnóstico, desenhamos e implementamos soluções integradas à realidade do negócio.</p>
        </div>
        <div style={valueStyles.pillars}>
          {PILLARS.map(([label, t, d]) => (
            <div key={t} className="mb-lift mb-row mb-reveal" style={valueStyles.pillar}>
              <p style={valueStyles.label}>{label}</p>
              <div><h3 style={valueStyles.pillarTitle}>{t}</h3><p style={valueStyles.pillarText}>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ValueProp = ValueProp;
