const proofStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--surface)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 },
  note: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: '24px 0 0' },
};
const SCENARIOS = [
  ['messageSquare', 'Atendimento pelo WhatsApp conectado ao ERP', 'A equipe consulta o sistema manualmente para responder sobre pedidos, estoque e entregas.', 'Um agente consulta o ERP e responde ao cliente no WhatsApp, com a equipe supervisionando.', 'Tempo médio de resposta'],
  ['fileText', 'Leitura e processamento de documentos', 'Contratos, notas e formulários são digitados à mão em mais de um sistema.', 'A IA extrai as informações e envia os dados para o processo correto.', 'Horas de digitação por mês'],
  ['fileBarChart', 'Relatórios automáticos para a gestão', 'Gestores esperam a consolidação manual de planilhas para acompanhar a operação.', 'Os dados são coletados dos sistemas, organizados e enviados periodicamente.', 'Tempo até o relatório chegar'],
];
const scStyles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 48 },
  card: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 26, display: 'flex', flexDirection: 'column', gap: 14 },
  chip: { alignSelf: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-ink)', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 'var(--radius-pill)', padding: '5px 10px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.3, color: 'var(--text)', margin: 0, letterSpacing: '-0.01em' },
  k: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 4px' },
  v: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text)', margin: 0 },
  metric: { marginTop: 'auto', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-strong)', background: 'var(--bg)' },
  metricName: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', margin: '0 0 8px' },
  bars: { display: 'flex', alignItems: 'flex-end', gap: 4, height: 28, marginBottom: 8 },
  metricNote: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', margin: 0 },
};
function Proof() {
  return (
    <section style={proofStyles.section} data-screen-label="Prova e credibilidade">
      <div style={proofStyles.inner}>
        <div style={{ maxWidth: 760 }}>
          <h2 style={proofStyles.h2}>Soluções desenvolvidas para funcionar no mundo real.</h2>
          <p style={proofStyles.p}>Cada projeto nasce de um problema concreto e é construído para se integrar à rotina, aos dados e aos sistemas da empresa.</p>
        </div>
        <div className="mb-grid-3" style={scStyles.grid}>
          {SCENARIOS.map(([icon, t, sit, sol, metric]) => (
            <article key={t} className="mb-lift mb-reveal" style={scStyles.card}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={scStyles.chip}>Cenário típico</span>
                <IconBadge name={icon} size={36} />
              </div>
              <h3 style={scStyles.title}>{t}</h3>
              <div><p style={scStyles.k}>Situação</p><p style={scStyles.v}>{sit}</p></div>
              <div><p style={scStyles.k}>Solução</p><p style={scStyles.v}>{sol}</p></div>
              <div style={scStyles.metric}>
                <p style={scStyles.k}>Indicador acompanhado</p>
                <p style={scStyles.metricName}>{metric}</p>
                <div style={scStyles.bars} aria-hidden="true">
                  {[26, 22, 19, 15, 12, 9].map((h, i) => <span key={i} style={{ flex: 1, height: h, borderRadius: 3, background: i > 2 ? 'var(--accent)' : 'var(--border)' }}></span>)}
                </div>
                <p style={scStyles.metricNote}>Meta definida no diagnóstico de cada projeto.</p>
              </div>
            </article>
          ))}
        </div>
        <p style={proofStyles.note}>Estudos de caso e depoimentos de clientes serão publicados aqui à medida que forem concluídos.</p>
      </div>
    </section>
  );
}
function AboutIllustration() {
  return (
    <div style={{ marginBottom: 24 }}>
      <PulseLine width={280} height={80} strokeWidth={2.25} id="aboutPulse" from="#B4AFBC" to="#FF7A1A" opts={{ chaosRatio: 0.5, tickEvery: 62, tickWidth: 22, steps: 40 }} />
    </div>
  );
}
function About() {
  const s = {
    section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--bg)' },
    inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 24px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
    p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-muted)', margin: '0 0 16px' },
    manifesto: { background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 'var(--radius-xl)', padding: 36, color: 'var(--text)' },
    manifestoText: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1.45, margin: 0, letterSpacing: '-0.015em' },
    closing: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, lineHeight: 1.7, margin: '24px 0 0', paddingTop: 20, borderTop: '1px solid rgba(13,9,18,.18)' },
  };
  return (
    <section id="sobre" style={s.section} data-screen-label="Sobre">
      <div className="mb-split" style={s.inner}>
        <div>
          <h2 style={s.h2}>Tecnologia deve simplificar a operação, não criar mais complexidade.</h2>
          <p style={s.p}>A MomboLabs nasceu para aproximar empresas das possibilidades reais da inteligência artificial e da automação. Unimos experiência em desenvolvimento de software, integração de sistemas, processos empresariais e IA.</p>
          <p style={s.p}>Nosso trabalho começa pelo entendimento do negócio. A tecnologia vem depois, como instrumento para reduzir fricção, organizar informações e criar novas possibilidades de crescimento.</p>
        </div>
        <div className="mb-reveal" style={s.manifesto}>
          <AboutIllustration />
          <p style={s.manifestoText}>Não acreditamos em IA aplicada apenas para acompanhar tendências. Acreditamos em tecnologia conectada a processos, dados e objetivos reais.</p>
          <p style={s.closing}>Menos tarefas manuais. Menos sistemas isolados. Mais inteligência em operação.</p>
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
window.About = About;
