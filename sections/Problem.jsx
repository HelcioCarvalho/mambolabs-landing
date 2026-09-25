const problemStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--paper)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)', gap: 64, alignItems: 'start' },
  head: { position: 'sticky', top: 112 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 },
  list: { borderTop: '1px solid var(--hairline)' },
  row: { display: 'grid', gridTemplateColumns: '220px 1fr', gap: 28, padding: '26px 0', borderBottom: '1px solid var(--hairline)' },
  rowTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' },
  rowDesc: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 },
  transition: { marginTop: 40, padding: '24px 28px', borderRadius: 'var(--radius-lg)', background: 'var(--lime)', fontFamily: 'var(--font-accent)', fontSize: 15, lineHeight: 1.6, color: 'var(--night)' },
};
const ITEMS = [
  ['Tarefas repetitivas', 'Sua equipe perde horas copiando informações, atualizando planilhas e executando atividades que poderiam ser automatizadas.'],
  ['Sistemas desconectados', 'ERP, CRM, WhatsApp, e-mail e outros sistemas funcionam separadamente, obrigando pessoas a transferirem dados manualmente.'],
  ['Informação dispersa', 'Documentos, históricos, cadastros e decisões ficam distribuídos em diferentes plataformas, dificultando o acesso.'],
  ['Atendimento lento', 'Clientes aguardam respostas enquanto a equipe procura informações ou depende de outras áreas.'],
  ['Decisões sem visibilidade', 'Gestores recebem informações atrasadas, incompletas ou difíceis de interpretar.'],
  ['Crescimento operacional caro', 'Para aumentar a capacidade de atendimento, a empresa precisa ampliar constantemente a equipe.'],
];
function Problem() {
  return (
    <section style={problemStyles.section} data-screen-label="Problema">
      <div className="mb-split" style={problemStyles.inner}>
        <div className="mb-sticky" style={problemStyles.head}>
          <h2 style={problemStyles.h2}>Processos desconectados limitam o crescimento.</h2>
          <p style={problemStyles.p}>Muitas empresas crescem acumulando tarefas manuais, planilhas, sistemas isolados e processos que dependem do conhecimento de poucas pessoas. Isso gera retrabalho, erros, demora no atendimento e custos operacionais cada vez maiores.</p>
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
