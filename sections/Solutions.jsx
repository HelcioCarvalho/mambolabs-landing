const solStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--surface)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 720, textWrap: 'balance' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 },
  cell: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'flex', flexDirection: 'column' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, lineHeight: 1.3, color: 'var(--text)', margin: '20px 0 8px', letterSpacing: '-0.01em' },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 16px' },
  benefit: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--accent-ink)', margin: 'auto 0 0', fontWeight: 500, paddingTop: 16, borderTop: '1px dashed var(--border-strong)' },
  chip: { display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 12, lineHeight: 1, padding: '6px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', color: 'var(--accent-ink)' },
  tags: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 },
};
const SOLUTIONS = [
  ['bot', 'Agentes de Inteligência Artificial', 'Criamos agentes capazes de consultar informações, interpretar documentos, responder perguntas e interagir com os sistemas da empresa.', ['Atendimento', 'Documentos', 'Relatórios'], 'Transforme conhecimento e dados da empresa em ações rápidas e acessíveis.'],
  ['workflow', 'Automação de processos', 'Automatizamos tarefas repetitivas e fluxos que hoje dependem de atividades manuais.', ['Cadastros', 'Notificações', 'Aprovações'], 'Reduza retrabalho, erros operacionais e tempo gasto em atividades administrativas.'],
  ['plug', 'Integração de sistemas', 'Conectamos sistemas que precisam trocar informações de maneira automática e segura.', ['ERP', 'CRM', 'APIs'], 'Faça os dados circularem entre os sistemas sem depender de lançamentos manuais.'],
  ['database', 'IA conectada aos dados da empresa', 'Criamos soluções de IA capazes de utilizar documentos, manuais e bancos de dados como fonte de conhecimento.', ['Contratos', 'Catálogos', 'Históricos'], 'Permita que equipes e clientes encontrem respostas com rapidez, contexto e segurança.'],
  ['layoutDashboard', 'Sistemas e aplicações personalizadas', 'Desenvolvemos aplicações web, portais, painéis e ferramentas específicas para a operação do cliente.', ['Portais', 'Dashboards', 'MVPs'], 'Quando uma ferramenta pronta não resolve, construímos a solução adequada ao processo.'],
  ['messageCircle', 'Automação de atendimento', 'Estruturamos atendimentos inteligentes conectados aos dados e processos da empresa.', ['WhatsApp', 'Sites', 'Agendamentos'], 'Atenda mais rápido sem perder contexto e sem sobrecarregar sua equipe.'],
  ['barChart3', 'Dados, dashboards e inteligência operacional', 'Organizamos dados de diferentes fontes em indicadores úteis para a tomada de decisão.', ['Relatórios', 'Alertas', 'Metas'], 'Tome decisões com informações atualizadas e acessíveis.'],
  ['compass', 'Consultoria e diagnóstico de IA', 'Ajudamos empresas que desejam aplicar inteligência artificial, mas ainda não possuem uma estratégia definida.', ['Roadmap', 'Priorização', 'Riscos'], 'Comece pela oportunidade certa, em vez de investir em tecnologia sem direção.'],
];
function Solutions() {
  return (
    <section id="solucoes" style={solStyles.section} data-screen-label="Soluções">
      <div style={solStyles.inner}>
        <h2 style={solStyles.h2}>Tecnologia aplicada aos desafios reais da sua empresa.</h2>
        <div className="mb-grid-4" style={solStyles.grid}>
          {SOLUTIONS.map(([icon, t, d, tags, b]) => (
            <div key={t} className="mb-lift mb-reveal" style={solStyles.cell}>
              <IconBadge name={icon} />
              <h3 style={solStyles.title}>{t}</h3>
              <p style={solStyles.desc}>{d}</p>
              <div style={solStyles.tags}>{tags.map(tg => <span key={tg} style={solStyles.chip}>{tg}</span>)}</div>
              <p style={solStyles.benefit}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Solutions = Solutions;
