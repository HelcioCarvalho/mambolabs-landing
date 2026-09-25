const priceStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--bg)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 720, textWrap: 'balance' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'stretch' },
  card: { position: 'relative', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 28, display: 'flex', flexDirection: 'column', gap: 18 },
  cardFeat: { border: '2px solid var(--accent)', padding: 27, boxShadow: '0 2px 4px rgba(13,9,18,.05), 0 24px 48px -24px rgba(255,122,26,.45)' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 },
  desc: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, margin: 0 },
  includes: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-ink)', margin: '6px 0 -6px' },
  list: { display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0, listStyle: 'none', fontFamily: 'var(--font-body)', fontSize: 14 },
  li: { display: 'flex', alignItems: 'center', gap: 10 },
  check: { width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0 },
  badge: { position: 'absolute', top: -13, left: 26, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--accent-contrast)', background: 'var(--accent)', borderRadius: 'var(--radius-pill)', padding: '6px 12px' },
  note: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', textAlign: 'center', margin: '28px auto 0', maxWidth: 620 },
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
            <div key={t} className="mb-lift mb-reveal" style={{ ...priceStyles.card, ...(feat ? priceStyles.cardFeat : {}) }}>
              {feat && <span style={priceStyles.badge}>Mais escolhido</span>}
              <h3 style={{ ...priceStyles.title, color: 'var(--text)' }}>{t}</h3>
              <p style={{ ...priceStyles.desc, color: 'var(--text-muted)' }}>{d}</p>
              <p style={priceStyles.includes}>O que inclui</p>
              <ul style={{ ...priceStyles.list, color: 'var(--text)' }}>
                {items.map(it => (
                  <li key={it} style={priceStyles.li}>
                    <span style={{ ...priceStyles.check, background: feat ? 'var(--accent)' : 'var(--accent-soft)', border: feat ? 'none' : '1px solid var(--accent-line)' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0D0912" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                    {it}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                {feat
                  ? <Button variant="primary" onClick={go}>{cta}</Button>
                  : <Button variant="ghost" className="mb-outline" onClick={go}>{cta}</Button>}
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
