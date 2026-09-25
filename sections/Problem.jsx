const problemStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--surface)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)', gap: 64, alignItems: 'start' },
  head: { position: 'sticky', top: 112 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 },
  list: { borderTop: '1px solid var(--border)' },
  row: { display: 'grid', gridTemplateColumns: '220px 1fr', gap: 28, padding: '26px 0', borderBottom: '1px solid var(--border)' },
  rowTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text)', margin: 0, letterSpacing: '-0.01em' },
  rowDesc: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
  transition: { marginTop: 40, padding: '24px 28px', borderRadius: 'var(--radius-lg)', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.45, color: 'var(--text)', letterSpacing: '-0.01em' },
};
const ITEMS = [
  ['Tarefas repetitivas', 'Sua equipe perde horas copiando informações, atualizando planilhas e executando atividades que poderiam ser automatizadas.'],
  ['Sistemas desconectados', 'ERP, CRM, WhatsApp, e-mail e outros sistemas funcionam separadamente, obrigando pessoas a transferirem dados manualmente.'],
  ['Informação dispersa', 'Documentos, históricos, cadastros e decisões ficam distribuídos em diferentes plataformas, dificultando o acesso.'],
  ['Atendimento lento', 'Clientes aguardam respostas enquanto a equipe procura informações ou depende de outras áreas.'],
  ['Decisões sem visibilidade', 'Gestores recebem informações atrasadas, incompletas ou difíceis de interpretar.'],
  ['Crescimento operacional caro', 'Para aumentar a capacidade de atendimento, a empresa precisa ampliar constantemente a equipe.'],
];
const DIS_NODES = [['ERP', 30, 34], ['CRM', 232, 18], ['Planilhas', 128, 112], ['WhatsApp', 20, 190], ['E-mail', 236, 176]];
const DIS_LINKS = [[0, 2], [1, 2], [2, 3], [2, 4], [0, 1], [3, 4]];
function Disconnected() {
  const c = i => [DIS_NODES[i][1] + 44, DIS_NODES[i][2] + 17];
  return (
    <svg viewBox="0 0 330 240" width="100%" style={{ display: 'block', maxWidth: 420, marginTop: 36 }} role="img" aria-label="Sistemas da empresa isolados, com conexões interrompidas entre ERP, CRM, planilhas, WhatsApp e e-mail">
      {DIS_LINKS.map(([a, b], i) => {
        const [x1, y1] = c(a), [x2, y2] = c(b), mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={mx - (x2 - x1) * 0.08} y2={my - (y2 - y1) * 0.08} stroke="#BDB8C6" strokeWidth="1.5" strokeDasharray="4 5" />
            <line x1={mx + (x2 - x1) * 0.08} y1={my + (y2 - y1) * 0.08} x2={x2} y2={y2} stroke="#BDB8C6" strokeWidth="1.5" strokeDasharray="4 5" />
            <path d={`M${mx - 4} ${my - 4}l8 8M${mx + 4} ${my - 4}l-8 8`} stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      })}
      {DIS_NODES.map(([label, x, y]) => (
        <g key={label}>
          <rect x={x} y={y} width="88" height="34" rx="10" fill="#FFFFFF" stroke="#D9D6DE" />
          <text x={x + 44} y={y + 21.5} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#0D0912">{label}</text>
        </g>
      ))}
    </svg>
  );
}
function Problem() {
  return (
    <section style={problemStyles.section} data-screen-label="Problema">
      <div className="mb-split" style={problemStyles.inner}>
        <div className="mb-sticky" style={problemStyles.head}>
          <h2 style={problemStyles.h2}>Processos desconectados limitam o crescimento.</h2>
          <p style={problemStyles.p}>Muitas empresas crescem acumulando tarefas manuais, planilhas, sistemas isolados e processos que dependem do conhecimento de poucas pessoas. Isso gera retrabalho, erros, demora no atendimento e custos operacionais cada vez maiores.</p>
          <Disconnected />
        </div>
        <div>
          <div style={problemStyles.list}>
            {ITEMS.map(([t, d]) => (
              <div key={t} className="mb-row" style={problemStyles.row}>
                <h3 style={problemStyles.rowTitle}>{t}</h3>
                <p style={problemStyles.rowDesc}>{d}</p>
              </div>
            ))}
          </div>
          <p className="mb-reveal" style={problemStyles.transition}>A MomboLabs transforma esses processos em operações conectadas, automatizadas e orientadas por inteligência.</p>
        </div>
      </div>
    </section>
  );
}
window.Problem = Problem;
