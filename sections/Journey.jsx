const jStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--canvas)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 14px', letterSpacing: 'var(--tracking-tight)', maxWidth: 720, textWrap: 'balance' },
  sub: { fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--ink-2)', margin: '0 0 44px' },
  lineWrap: { margin: '0 0 18px' },
  row: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12 },
  step: { display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--paper)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-lg)', padding: 22 },
  num: { alignSelf: 'flex-start', fontFamily: 'var(--font-accent)', fontSize: 13, color: 'var(--night)', background: 'var(--lime)', borderRadius: 'var(--radius-pill)', padding: '5px 11px', marginBottom: 6 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16.5, lineHeight: 1.3, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 },
  footer: { marginTop: 40, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1.35, color: 'var(--ink)', maxWidth: 680, letterSpacing: '-0.015em' },
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
        <div className="mb-hide-sm" style={jStyles.lineWrap}>
          <PulseLine width={1120} height={46} strokeWidth={2} from="#9AA0A8" to="#5A6A18" opts={{ chaosRatio: 0.3, tickEvery: 160, tickWidth: 46, steps: 70 }} />
        </div>
        <div className="mb-grid-5" style={jStyles.row}>
          {STEPS.map(([t, d], i) => (
            <div key={t} className="mb-lift mb-reveal" style={jStyles.step}>
              <span style={jStyles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={jStyles.title}>{t}</h3>
              <p style={jStyles.desc}>{d}</p>
            </div>
          ))}
        </div>
        <p style={jStyles.footer}>Começamos com um problema bem definido, <span className="mb-mark">validamos a solução</span> e ampliamos conforme os resultados aparecem.</p>
      </div>
    </section>
  );
}
window.Journey = Journey;
