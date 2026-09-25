const priceStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--canvas)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 720, textWrap: 'balance' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'stretch' },
  card: { background: 'var(--paper)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-xl)', padding: 28, display: 'flex', flexDirection: 'column', gap: 18 },
  cardFeat: { background: 'var(--night)', border: '1px solid var(--night)', boxShadow: 'var(--shadow-glow-accent)' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 },
  desc: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, margin: 0 },
  includes: { fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', margin: '6px 0 -6px' },
  list: { display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0, listStyle: 'none', fontFamily: 'var(--font-body)', fontSize: 14.5 },
  li: { display: 'flex', alignItems: 'center', gap: 10 },
  check: { width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0 },
  note: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-3)', textAlign: 'center', margin: '28px auto 0', maxWidth: 620 },
};
const PLANS = [
  ['Diagnóstico e planejamento', 'Para empresas que precisam identificar e priorizar oportunidades de IA e automação.', ['Levantamento inicial', 'Mapeamento de processos', 'Análise de viabilidade', 'Priorização', 'Proposta de arquitetura', 'Roadmap de implementação'], 'Solicitar diagnóstico', false],
  ['Projeto personalizado', 'Para desenvolvimento de automações, agentes, integrações ou sistemas específicos.', ['Definição do escopo', 'Desenho da solução', 'Desenvolvimento', 'Testes', 'Implantação', 'Documentação'], 'Falar sobre um projeto', true],
  ['Evolução contínua', 'Para empresas que desejam manter e expandir um ecossistema de automação e IA.', ['Acompanhamento', 'Suporte', 'Melhorias', 'Novas automações', 'Monitoramento', 'Evolução dos agentes'], 'Construir uma parceria', false],
];
function Pricing({ Button }) {
  const go = () => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="modelos" style={priceStyles.section} data-screen-label="Modelos de trabalho">
      <div style={priceStyles.inner}>
        <h2 style={priceStyles.h2}>Cada projeto é dimensionado para a sua operação.</h2>
        <div className="mb-grid-3" style={priceStyles.grid}>
          {PLANS.map(([t, d, items, cta, feat]) => (
            <div key={t} className={feat ? 'mb-reveal' : 'mb-lift mb-reveal'} style={{ ...priceStyles.card, ...(feat ? priceStyles.cardFeat : {}) }}>
              <h3 style={{ ...priceStyles.title, color: feat ? 'var(--on-night)' : 'var(--ink)' }}>{t}</h3>
              <p style={{ ...priceStyles.desc, color: feat ? 'var(--on-night-2)' : 'var(--ink-2)' }}>{d}</p>
              <p style={{ ...priceStyles.includes, color: feat ? 'var(--lime)' : 'var(--olive)' }}>O que inclui</p>
              <ul style={{ ...priceStyles.list, color: feat ? 'var(--on-night)' : 'var(--ink)' }}>
                {items.map(it => (
                  <li key={it} style={priceStyles.li}>
                    <span style={{ ...priceStyles.check, background: feat ? 'var(--lime)' : 'var(--lime-soft)' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2A2B22" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                    {it}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                {feat
                  ? <Button variant="primary" onClick={go}>{cta}</Button>
                  : <Button variant="ghost" onClick={go}>{cta}</Button>}
              </div>
            </div>
          ))}
        </div>
        <p style={priceStyles.note}>Cada projeto é dimensionado de acordo com a complexidade, integrações, volume de informações e objetivos da empresa.</p>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
