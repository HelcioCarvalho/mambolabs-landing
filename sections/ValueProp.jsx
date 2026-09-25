const valueStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: 0 },
  pillars: { display: 'flex', flexDirection: 'column' },
  pillar: { padding: '22px 0', borderTop: '1px solid var(--border-dark)' },
  label: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-400)', margin: '0 0 8px' },
  pillarTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--text-primary-dark)', margin: '0 0 6px' },
  pillarText: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: 0 },
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
          <h2 style={valueStyles.h2}>Não instalamos apenas ferramentas.<br />Construímos soluções para a sua operação.</h2>
          <p style={valueStyles.p}>Cada empresa possui processos, sistemas e objetivos diferentes. Por isso, a MomboLabs começa entendendo como a operação funciona, onde estão os gargalos e quais oportunidades podem gerar maior impacto. A partir desse diagnóstico, desenhamos e implementamos soluções integradas à realidade do negócio.</p>
        </div>
        <div style={valueStyles.pillars}>
          {PILLARS.map(([label, t, d]) => (
            <div key={t} style={valueStyles.pillar}>
              <p style={valueStyles.label}>{label}</p>
              <h3 style={valueStyles.pillarTitle}>{t}</h3><p style={valueStyles.pillarText}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ValueProp = ValueProp;
