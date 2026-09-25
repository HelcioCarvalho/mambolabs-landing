function FinalCta() {
  return (
    <section id="contato" className="section" data-screen-label="CTA final">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__dots"></div>
          <div>
            <span className="label">AI Delivery</span>
            <h2 className="display">AI Delivery para empresas.</h2>
            <p className="cta__lead">Estratégia, automação, agentes, integrações e desenvolvimento em uma única entrega.</p>
          </div>
          <div className="cta__side">
            <p>Sem obrigar sua empresa a adaptar toda a operação a uma nova plataforma.</p>
            <p className="strong">Construímos a tecnologia ao redor do seu processo.</p>
            <div><CtaButton variant="dark">Tenho um processo para automatizar</CtaButton></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCta = FinalCta;
