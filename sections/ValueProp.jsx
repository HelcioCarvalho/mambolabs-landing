const valueStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 20px', letterSpacing: '-0.02em' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: 0 },
  pillars: { display: 'flex', flexDirection: 'column', gap: 28 },
  pillar: { display: 'flex', gap: 20, alignItems: 'flex-start' },
  num: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--accent-500)', lineHeight: 1 },
  pillarTitle: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-primary-dark)', margin: '0 0 6px' },
  pillarText: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: 0 },
};
const PILLARS = [
  ['01', 'Estratégia', 'Identificamos os processos em que tecnologia e IA podem gerar resultados concretos.'],
  ['02', 'Tecnologia', 'Selecionamos e desenvolvemos as ferramentas, integrações e modelos adequados para cada necessidade.'],
  ['03', 'Implementação', 'Colocamos a solução para funcionar dentro da operação, com validação, acompanhamento e melhoria contínua.'],
];
function ValueProp() {
  return (
    <section style={valueStyles.section} data-screen-label="Proposta de valor">
      <div style={valueStyles.inner}>
        <div>
          <h2 style={valueStyles.h2}>Não instalamos apenas ferramentas.<br />Construímos soluções para a sua operação.</h2>
          <p style={valueStyles.p}>Cada empresa possui processos, sistemas e objetivos diferentes. Por isso, a MamboLabs começa entendendo como a operação funciona, onde estão os gargalos e quais oportunidades podem gerar maior impacto. A partir desse diagnóstico, desenhamos e implementamos soluções integradas à realidade do negócio.</p>
        </div>
        <div style={valueStyles.pillars}>
          {PILLARS.map(([n, t, d]) => (
            <div key={n} style={valueStyles.pillar}>
              <span style={valueStyles.num}>{n}</span>
              <div><h3 style={valueStyles.pillarTitle}>{t}</h3><p style={valueStyles.pillarText}>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ValueProp = ValueProp;
