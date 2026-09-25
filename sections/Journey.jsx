const jStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 8px', letterSpacing: 'var(--tracking-tight)', maxWidth: 640 },
  sub: { fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-tertiary-dark)', margin: '0 0 40px' },
  lineWrap: { marginBottom: 12 },
  row: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24 },
  step: { display: 'flex', flexDirection: 'column', gap: 12, borderTop: '1px solid var(--border-dark)', paddingTop: 18 },
  num: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-400)' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--text-primary-dark)', margin: 0 },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary-dark)', margin: 0 },
  footer: { marginTop: 48, fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: 22, color: 'var(--accent-400)', maxWidth: 640, letterSpacing: 'var(--tracking-tight)' },
};
const STEPS = [
  ['Descoberta', 'Conversamos com sua equipe para entender o negócio, os objetivos e os principais desafios.'],
  ['Mapeamento', 'Analisamos processos, sistemas, dados, gargalos e tarefas manuais.'],
  ['Priorização', 'Identificamos as oportunidades com maior impacto e melhor relação entre esforço, custo e resultado.'],
  ['Desenvolvimento e integração', 'Construímos a automação, agente ou sistema e conectamos a solução às ferramentas utilizadas.'],
  ['Implantação e evolução', 'Validamos o funcionamento, acompanhamos a adoção e evoluímos conforme a operação amadurece.'],
];
function Journey() {
  return (
    <section id="jornada" style={jStyles.section} data-screen-label="Jornada do cliente">
      <div style={jStyles.inner}>
        <h2 style={jStyles.h2}>Da identificação do problema à solução em operação.</h2>
        <p style={jStyles.sub}>Cinco compassos, do diagnóstico à operação em ritmo próprio.</p>
        <div style={jStyles.lineWrap}>
          <PulseLine width={1120} height={46} strokeWidth={1.75} opts={{ chaosRatio: 0.3, tickEvery: 160, tickWidth: 46, steps: 70 }} />
        </div>
        <div className="mb-grid-5" style={jStyles.row}>
          {STEPS.map(([t, d], i) => (
            <div key={t} style={jStyles.step}>
              <span style={jStyles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={jStyles.title}>{t}</h3>
              <p style={jStyles.desc}>{d}</p>
            </div>
          ))}
        </div>
        <p style={jStyles.footer}>Começamos com um problema bem definido, validamos a solução e ampliamos conforme os resultados aparecem.</p>
      </div>
    </section>
  );
}
window.Journey = Journey;
