const valueStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--bg)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 24px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 },
  pillars: { position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 },
  pillar: { position: 'relative', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 18, alignItems: 'start', padding: '22px 24px', borderRadius: 'var(--radius-lg)', background: 'var(--card)', border: '1px solid var(--border)' },
  label: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-ink)', margin: '0 0 6px' },
  pillarTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text)', margin: '0 0 6px' },
  pillarText: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
};
const PILLAR_ICONS = ['target', 'wrench', 'trendingUp'];
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
          <span aria-hidden="true" style={{ position: 'absolute', left: 48, top: 40, bottom: 40, width: 0, borderLeft: '1.5px dashed var(--accent-line)' }}></span>
          {PILLARS.map(([label, t, d], i) => (
            <div key={t} className="mb-lift mb-reveal" style={valueStyles.pillar}>
              <IconBadge name={PILLAR_ICONS[i]} size={48} />
              <div><p style={valueStyles.label}>{label}</p><h3 style={valueStyles.pillarTitle}>{t}</h3><p style={valueStyles.pillarText}>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ValueProp = ValueProp;
