const benStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--night)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 64, alignItems: 'center' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--on-night)', margin: 0, letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  list: { display: 'flex', flexWrap: 'wrap', gap: 10, margin: 0, padding: 0, listStyle: 'none' },
  chip: { display: 'inline-flex', alignItems: 'center', gap: 10, padding: '11px 18px 11px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--hairline-night)', background: 'rgba(244,246,236,0.04)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, color: 'var(--on-night)' },
  dot: { width: 22, height: 22, borderRadius: '50%', background: 'var(--lime)', display: 'grid', placeItems: 'center', flexShrink: 0 },
};
const BENEFITS = ['Redução de tarefas manuais', 'Processos mais rápidos', 'Menor risco de erros', 'Informações centralizadas', 'Atendimento mais ágil', 'Maior rastreabilidade', 'Integração entre equipes e sistemas', 'Crescimento sem custos proporcionais', 'Decisões baseadas em dados', 'Melhor aproveitamento da equipe'];
function Benefits() {
  return (
    <section style={benStyles.section} data-screen-label="Benefícios">
      <div className="mb-split" style={benStyles.inner}>
        <h2 style={benStyles.h2}>Mais eficiência para operar. Mais inteligência para crescer.</h2>
        <ul style={benStyles.list}>
          {BENEFITS.map(b => (
            <li key={b} className="mb-reveal" style={benStyles.chip}>
              <span style={benStyles.dot}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2A2B22" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
window.Benefits = Benefits;
