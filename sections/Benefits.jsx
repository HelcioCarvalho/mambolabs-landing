const benStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 640 },
  grid: { display: 'grid', gap: '1px', background: 'var(--border-dark)', border: '1px solid var(--border-dark)' },
  cell: { background: 'var(--graphite-950)', padding: '26px 22px', fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-secondary-dark)', lineHeight: 1.5 },
};
const BENEFITS = ['Redução de tarefas manuais', 'Processos mais rápidos', 'Menor risco de erros', 'Informações centralizadas', 'Atendimento mais ágil', 'Maior rastreabilidade', 'Integração entre equipes e sistemas', 'Crescimento sem custos proporcionais', 'Decisões baseadas em dados', 'Melhor aproveitamento da equipe'];
function Benefits() {
  return (
    <section style={benStyles.section} data-screen-label="Benefícios">
      <div style={benStyles.inner}>
        <h2 style={benStyles.h2}>Mais eficiência para operar. Mais inteligência para crescer.</h2>
        <div className="mb-grid-5" style={benStyles.grid}>{BENEFITS.map(b => <div key={b} style={benStyles.cell}>{b}</div>)}</div>
      </div>
    </section>
  );
}
window.Benefits = Benefits;
