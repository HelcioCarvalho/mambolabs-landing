const solStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 640 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--white-soft)', margin: '14px 0 10px' },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: '0 0 14px' },
  benefit: { fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'var(--accent-400)', margin: 0, fontWeight: 600 },
  tags: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 },
};
const SOLUTIONS = [
  ['bot', 'Agentes de Inteligência Artificial', 'Criamos agentes capazes de consultar informações, interpretar documentos, responder perguntas e interagir com os sistemas da empresa.', ['Atendimento', 'Documentos', 'Relatórios'], 'Transforme conhecimento e dados da empresa em ações rápidas e acessíveis.'],
  ['workflow', 'Automação de processos', 'Automatizamos tarefas repetitivas e fluxos que hoje dependem de atividades manuais.', ['Cadastros', 'Notificações', 'Aprovações'], 'Reduza retrabalho, erros operacionais e tempo gasto em atividades administrativas.'],
  ['plug', 'Integração de sistemas', 'Conectamos sistemas que precisam trocar informações de maneira automática e segura.', ['ERP', 'CRM', 'APIs'], 'Faça os dados circularem entre os sistemas sem depender de lançamentos manuais.'],
  ['database', 'IA conectada aos dados da empresa', 'Criamos soluções de IA capazes de utilizar documentos, manuais e bancos de dados como fonte de conhecimento.', ['Contratos', 'Catálogos', 'Históricos'], 'Permita que equipes e clientes encontrem respostas com rapidez, contexto e segurança.'],
  ['window', 'Sistemas e aplicações personalizadas', 'Desenvolvemos aplicações web, portais, painéis e ferramentas específicas para a operação do cliente.', ['Portais', 'Dashboards', 'MVPs'], 'Quando uma ferramenta pronta não resolve, construímos a solução adequada ao processo.'],
  ['chat', 'Automação de atendimento', 'Estruturamos atendimentos inteligentes conectados aos dados e processos da empresa.', ['WhatsApp', 'Sites', 'Agendamentos'], 'Atenda mais rápido sem perder contexto e sem sobrecarregar sua equipe.'],
  ['chart', 'Dados, dashboards e inteligência operacional', 'Organizamos dados de diferentes fontes em indicadores úteis para a tomada de decisão.', ['Relatórios', 'Alertas', 'Metas'], 'Tome decisões com informações atualizadas e acessíveis.'],
  ['compass', 'Consultoria e diagnóstico de IA', 'Ajudamos empresas que desejam aplicar inteligência artificial, mas ainda não possuem uma estratégia definida.', ['Roadmap', 'Priorização', 'Riscos'], 'Comece pela oportunidade certa, em vez de investir em tecnologia sem direção.'],
];
function Solutions({ Card, Tag }) {
  return (
    <section id="solucoes" style={solStyles.section} data-screen-label="Soluções">
      <div style={solStyles.inner}>
        <h2 style={solStyles.h2}>Tecnologia aplicada aos desafios reais da sua empresa.</h2>
        <div style={solStyles.grid}>
          {SOLUTIONS.map(([icon, t, d, tags, b]) => (
            <Card key={t} hover>
              <IconBadge name={icon} />
              <h3 style={solStyles.title}>{t}</h3>
              <p style={solStyles.desc}>{d}</p>
              <div style={solStyles.tags}>{tags.map(tg => <Tag key={tg}>{tg}</Tag>)}</div>
              <p style={solStyles.benefit}>{b}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Solutions = Solutions;
