const jStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 56px', letterSpacing: '-0.02em', maxWidth: 640 },
  row: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24, position: 'relative' },
  line: { position: 'absolute', top: 19, left: '10%', right: '10%', height: 2, background: 'var(--border-dark)' },
  step: { position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 },
  dot: { width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-500)', color: 'var(--graphite-950)', fontFamily: 'var(--font-display)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, zIndex: 1 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-primary-dark)', margin: 0 },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary-dark)', margin: 0 },
  footer: { marginTop: 48, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--accent-400)', maxWidth: 640 },
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
        <div style={jStyles.row}>
          <div style={jStyles.line}></div>
          {STEPS.map(([t, d], i) => (
            <div key={t} style={jStyles.step}>
              <span style={jStyles.dot}>{i + 1}</span>
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
