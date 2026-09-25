const FLOW = [
  { icon: 'inbox', name: 'Seu processo', meta: 'Planilhas, mensagens, documentos', tag: 'INPUT' },
  { icon: 'bot', name: 'Mombo Labs', meta: 'IA, automação, APIs e software', tag: 'BUILD', hot: true },
  { icon: 'check', name: 'Solução funcionando', meta: 'Em produção, integrada à operação', tag: 'LIVE' },
];
const INCLUDES = ['Automação de processos', 'Agentes de IA', 'Integrações', 'Sistemas personalizados'];
function Hero() {
  return (
    <section id="topo" className="hero" data-screen-label="Hero">
      <div className="hero__grid-bg"></div>
      <div className="hero__glow"></div>
      <div className="container hero__inner">
        <div>
          <span className="label reveal">AI Delivery</span>
          <h1 className="display hero__title reveal" style={{ '--i': 1 }}>Soluções de IA e automação <span className="mark">entregues</span> para o seu negócio.</h1>
          <p className="hero__lead reveal" style={{ '--i': 2 }}>Não vendemos uma ferramenta para você aprender a usar.</p>
          <p className="body hero__copy reveal" style={{ '--i': 3 }}>Entendemos o processo, construímos a solução, integramos as tecnologias necessárias e entregamos funcionando.</p>
          <p className="hero__services reveal" style={{ '--i': 4 }}>Automação de processos, agentes de IA, integrações e sistemas personalizados para empresas.</p>
          <div className="hero__ctas reveal" style={{ '--i': 5 }}>
            <CtaButton>Quero automatizar um processo</CtaButton>
          </div>
        </div>
        <aside className="panel reveal" style={{ '--i': 3 }} aria-label="Como a entrega funciona">
          <div className="panel__head">
            <span className="panel__badge">Entrega completa</span>
            <span className="panel__status"><i></i>em produção</span>
          </div>
          <p className="panel__title">Do processo à solução</p>
          <div className="flow">
            {FLOW.map((s, i) => (
              <React.Fragment key={s.name}>
                {i > 0 && <div className="flow__link"></div>}
                <div className={`flow__step${s.hot ? ' flow__step--hot' : ''}`}>
                  <span className="flow__icon"><Icon name={s.icon} size={18} color={s.hot ? 'var(--text)' : 'var(--ink-text)'} /></span>
                  <span>
                    <div className="flow__name">{s.name}</div>
                    <div className="flow__meta">{s.meta}</div>
                  </span>
                  <span className="flow__tag">{s.tag}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="includes">
            <div className="includes__label">A entrega inclui</div>
            <ul className="includes__list">
              {INCLUDES.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
window.Hero = Hero;
