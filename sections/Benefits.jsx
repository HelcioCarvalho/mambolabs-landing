const benStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--surface)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: 64, alignItems: 'start' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 12, margin: 0, padding: 0, listStyle: 'none' },
  item: { display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', background: 'var(--card)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, lineHeight: 1.35, color: 'var(--text)' },
  dot: { width: 28, height: 28, borderRadius: '50%', background: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0 },
};
const BENEFITS = ['Redução de tarefas manuais', 'Processos mais rápidos', 'Menor risco de erros', 'Informações centralizadas', 'Atendimento mais ágil', 'Maior rastreabilidade', 'Integração entre equipes e sistemas', 'Crescimento sem custos proporcionais', 'Decisões baseadas em dados', 'Melhor aproveitamento da equipe'];
function Benefits() {
  return (
    <section style={benStyles.section} data-screen-label="Benefícios">
      <div className="mb-split" style={benStyles.inner}>
        <div className="mb-sticky" style={{ position: 'sticky', top: 112 }}>
          <h2 style={benStyles.h2}>Mais eficiência para operar. Mais inteligência para crescer.</h2>
        </div>
        <ul className="mb-grid-2" style={benStyles.grid}>
          {BENEFITS.map(b => (
            <li key={b} className="mb-lift mb-reveal" style={benStyles.item}>
              <span style={benStyles.dot}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D0912" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
window.Benefits = Benefits;
