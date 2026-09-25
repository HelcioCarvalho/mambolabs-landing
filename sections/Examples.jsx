const EXAMPLES = [
  { icon: 'chat', tag: 'Agente', text: 'Agente conectado ao WhatsApp para atendimento e operações.' },
  { icon: 'mic', tag: 'Agente', text: 'Agente que analisa reuniões e transforma informações em processos estruturados.' },
  { icon: 'document', tag: 'Automação', text: 'Automação que consulta documentos no Google Drive e gera relatórios.' },
  { icon: 'plug', tag: 'Integração', text: 'Integração entre sistemas de gestão de projetos e inteligência artificial.' },
  { icon: 'tag', tag: 'Automação', text: 'Automação de análise e classificação de documentos.' },
  { icon: 'chart', tag: 'Dashboard', text: 'Dashboards para acompanhar agentes e processos automatizados.' },
];
function Examples() {
  return (
    <section id="exemplos" className="section" data-screen-label="Exemplos">
      <div className="container">
        <div className="head">
          <div className="head__text">
            <span className="label reveal">Portfólio</span>
            <h2 className="h2 reveal" style={{ '--i': 1 }}>Exemplos de entregas</h2>
          </div>
        </div>
        <div className="examples">
          {EXAMPLES.map((e, i) => (
            <article key={e.text} className="ex reveal" style={{ '--i': i % 3 }}>
              <div className="ex__top">
                <span className="ex__icon"><Icon name={e.icon} size={20} color="var(--accent)" /></span>
                <span className="chip">{e.tag}</span>
              </div>
              <p className="ex__text">{e.text}</p>
            </article>
          ))}
          <article className="ex ex--wide reveal">
            <div className="ex__main">
              <span className="ex__icon"><Icon name="window" size={20} color="var(--text)" /></span>
              <p className="ex__text">Sistemas internos desenvolvidos para processos específicos.</p>
            </div>
            <span className="chip">Sistema sob medida</span>
          </article>
        </div>
      </div>
    </section>
  );
}
window.Examples = Examples;
