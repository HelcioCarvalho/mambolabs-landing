const SOLUTIONS = [
  { name: 'AI Automation', icon: 'workflow', cls: 'sol--feature', text: 'Automatizamos processos que hoje dependem de tarefas manuais, conferências, cópias de informações, documentos, planilhas, mensagens e acompanhamento humano.', chips: ['Tarefas manuais', 'Conferências', 'Documentos', 'Planilhas', 'Mensagens'] },
  { name: 'AI Agents', icon: 'bot', cls: 'sol--narrow sol--dark', text: 'Criamos agentes de inteligência artificial conectados aos dados e ferramentas da empresa. Agentes que podem pesquisar, analisar, executar tarefas e interagir com sistemas reais.' },
  { name: 'AI Integrations', icon: 'plug', cls: '', text: 'Conectamos ferramentas que antes funcionavam separadamente, funcionando em um único fluxo.', chips: ['WhatsApp', 'Google Drive', 'ClickUp', 'Sistemas internos', 'APIs', 'Bancos de dados', 'Modelos de IA'] },
  { name: 'Custom AI Solutions', icon: 'layers', cls: '', text: 'Quando uma ferramenta pronta não resolve o problema, construímos uma solução específica: painéis, sistemas internos, workflows, interfaces, agentes e automações desenvolvidas para aquela operação.' },
];
function Solutions() {
  return (
    <section id="entregas" className="section" data-screen-label="O que entregamos">
      <div className="container">
        <div className="head">
          <div className="head__text">
            <span className="label reveal">Serviços</span>
            <h2 className="h2 reveal" style={{ '--i': 1 }}>O que entregamos</h2>
          </div>
          <p className="body head__aside reveal" style={{ '--i': 2 }}>Quatro frentes que se combinam em uma única entrega, desenhada para a sua operação.</p>
        </div>
        <div className="solutions">
          {SOLUTIONS.map((s, i) => (
            <article key={s.name} className={`sol ${s.cls} reveal`} style={{ '--i': i }}>
              <div className="sol__top">
                <span className="sol__icon"><Icon name={s.icon} size={22} color="var(--text)" /></span>
                <span className="sol__num">0{i + 1}</span>
              </div>
              <h3 className="sol__name">{s.name}</h3>
              <p className="body">{s.text}</p>
              {s.chips && <div className="sol__chips">{s.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Solutions = Solutions;
