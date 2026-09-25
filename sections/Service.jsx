function Service() {
  return (
    <section id="servico" className="section" data-screen-label="IA como serviço">
      <div className="container service">
        <div>
          <span className="label reveal">IA como serviço</span>
          <h2 className="h2 reveal" style={{ '--i': 1, marginTop: 16 }}>IA como serviço aplicado ao negócio.</h2>
          <div className="service__contrast">
            <p className="service__line service__line--muted reveal" style={{ '--i': 2 }}>Muitas empresas não precisam comprar mais um software.</p>
            <p className="service__line reveal" style={{ '--i': 3 }}>Precisam <span className="mark">resolver um problema.</span></p>
          </div>
        </div>
        <div className="service__card reveal" style={{ '--i': 2 }}>
          <p className="body">Na Mombo Labs, desenvolvemos soluções específicas para cada operação utilizando inteligência artificial, automação, APIs e desenvolvimento de software.</p>
          <div className="service__handoff">
            <div className="handoff">
              <div className="handoff__who">Você</div>
              <p className="handoff__what">Apresenta o processo.</p>
            </div>
            <div className="handoff__arrow"><Icon name="arrow" size={22} /></div>
            <div className="handoff handoff--us">
              <div className="handoff__who">Mombo Labs</div>
              <p className="handoff__what">Projeta e entrega a solução.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Service = Service;
