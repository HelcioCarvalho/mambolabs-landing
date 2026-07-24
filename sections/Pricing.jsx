const priceStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 640 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 },
  card: { background: 'var(--surface-card-dark)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: 32, display: 'flex', flexDirection: 'column', gap: 18 },
  cardFeat: { background: 'linear-gradient(165deg, rgba(255,122,26,0.14), rgba(139,92,246,0.10))', border: '1px solid var(--accent-500)', boxShadow: 'var(--shadow-glow-accent)' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, margin: 0 },
  list: { display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0, listStyle: 'none', fontFamily: 'var(--font-body)', fontSize: 14 },
  note: { fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-secondary-dark)', textAlign: 'center', marginTop: 32 },
};
const PLANS = [
  ['Diagnóstico e planejamento', 'Para empresas que precisam identificar e priorizar oportunidades de IA e automação.', ['Levantamento inicial', 'Mapeamento de processos', 'Análise de viabilidade', 'Priorização', 'Proposta de arquitetura', 'Roadmap de implementação'], 'Solicitar diagnóstico', false],
  ['Projeto personalizado', 'Para desenvolvimento de automações, agentes, integrações ou sistemas específicos.', ['Definição do escopo', 'Desenho da solução', 'Desenvolvimento', 'Testes', 'Implantação', 'Documentação'], 'Falar sobre um projeto', true],
  ['Evolução contínua', 'Para empresas que desejam manter e expandir um ecossistema de automação e IA.', ['Acompanhamento', 'Suporte', 'Melhorias', 'Novas automações', 'Monitoramento', 'Evolução dos agentes'], 'Construir uma parceria', false],
];
function Pricing({ Button }) {
  return (
    <section id="modelos" style={priceStyles.section} data-screen-label="Modelos de trabalho">
      <div style={priceStyles.inner}>
        <h2 style={priceStyles.h2}>Cada projeto é dimensionado para a sua operação.</h2>
        <div style={priceStyles.grid}>
          {PLANS.map(([t, d, items, cta, feat]) => (
            <div key={t} style={{ ...priceStyles.card, ...(feat ? priceStyles.cardFeat : {}) }}>
              <h3 style={{ ...priceStyles.title, color: 'var(--white-soft)' }}>{t}</h3>
              <p style={{ ...priceStyles.desc, color: 'var(--text-secondary-dark)' }}>{d}</p>
              <ul style={{ ...priceStyles.list, color: 'var(--text-secondary-dark)' }}>
                {items.map(it => <li key={it}>— {it}</li>)}
              </ul>
              <div style={{ marginTop: 'auto' }}><Button variant={feat ? 'primary' : 'ghost'}>{cta}</Button></div>
            </div>
          ))}
        </div>
        <p style={priceStyles.note}>Cada projeto é dimensionado de acordo com a complexidade, integrações, volume de informações e objetivos da empresa.</p>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
