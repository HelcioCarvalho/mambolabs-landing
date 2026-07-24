const problemStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  head: { maxWidth: 640, marginBottom: 56 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 16px', letterSpacing: '-0.02em' },
  p: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 },
  transition: { marginTop: 48, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--accent-400)', maxWidth: 720 },
};
const ITEMS = [
  ['Tarefas repetitivas', 'Sua equipe perde horas copiando informações, atualizando planilhas e executando atividades que poderiam ser automatizadas.'],
  ['Sistemas desconectados', 'ERP, CRM, WhatsApp, e-mail e outros sistemas funcionam separadamente, obrigando pessoas a transferirem dados manualmente.'],
  ['Informação dispersa', 'Documentos, históricos, cadastros e decisões ficam distribuídos em diferentes plataformas, dificultando o acesso.'],
  ['Atendimento lento', 'Clientes aguardam respostas enquanto a equipe procura informações ou depende de outras áreas.'],
  ['Decisões sem visibilidade', 'Gestores recebem informações atrasadas, incompletas ou difíceis de interpretar.'],
  ['Crescimento operacional caro', 'Para aumentar a capacidade de atendimento, a empresa precisa ampliar constantemente a equipe.'],
];
function Problem({ Card }) {
  return (
    <section style={problemStyles.section} data-screen-label="Problema">
      <div style={problemStyles.inner}>
        <div style={problemStyles.head}>
          <h2 style={problemStyles.h2}>Processos desconectados limitam o crescimento.</h2>
          <p style={problemStyles.p}>Muitas empresas crescem acumulando tarefas manuais, planilhas, sistemas isolados e processos que dependem do conhecimento de poucas pessoas. Isso gera retrabalho, erros, demora no atendimento e custos operacionais cada vez maiores.</p>
        </div>
        <div style={problemStyles.grid}>
          {ITEMS.map(([t, d]) => (
            <Card key={t} hover>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--white-soft)', margin: '0 0 10px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: 0 }}>{d}</p>
            </Card>
          ))}
        </div>
        <p style={problemStyles.transition}>A MamboLabs transforma esses processos em operações conectadas, automatizadas e orientadas por inteligência.</p>
      </div>
    </section>
  );
}
window.Problem = Problem;
