const problemStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  head: { maxWidth: 640, marginBottom: 64 },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-400)', margin: '0 0 16px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 16px', letterSpacing: 'var(--tracking-tight)' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: 0 },
  list: { borderTop: '1px solid var(--border-dark)' },
  row: { display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, padding: '28px 0', borderBottom: '1px solid var(--border-dark)' },
  rowTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--white-soft)', margin: 0 },
  rowDesc: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: 0, maxWidth: 620 },
  transition: { marginTop: 48, fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: 24, color: 'var(--accent-400)', maxWidth: 720, letterSpacing: 'var(--tracking-tight)' },
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
      <div style={problemStyles.inner}>
        <div style={problemStyles.head}>
          <p style={problemStyles.eyebrow}>Fora de compasso</p>
          <h2 style={problemStyles.h2}>Processos desconectados limitam o crescimento.</h2>
          <p style={problemStyles.p}>Muitas empresas crescem acumulando tarefas manuais, planilhas, sistemas isolados e processos que dependem do conhecimento de poucas pessoas. Isso gera retrabalho, erros, demora no atendimento e custos operacionais cada vez maiores.</p>
        </div>
        <div style={problemStyles.list}>
          {ITEMS.map(([t, d]) => (
            <div key={t} className="mb-row" style={problemStyles.row}>
              <h3 style={problemStyles.rowTitle}>{t}</h3>
              <p style={problemStyles.rowDesc}>{d}</p>
            </div>
          ))}
        </div>
        <p style={problemStyles.transition}>A MomboLabs transforma esses processos em operações conectadas, automatizadas e orientadas por inteligência.</p>
      </div>
    </section>
  );
}
window.Problem = Problem;
