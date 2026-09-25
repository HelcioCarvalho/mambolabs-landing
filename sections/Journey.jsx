const STEPS = [
  ['Discovery', 'Entendemos o processo e identificamos onde existe oportunidade de automação.'],
  ['Design', 'Desenhamos a arquitetura da solução e definimos as integrações necessárias.'],
  ['Build', 'Construímos agentes, automações, sistemas e integrações.'],
  ['Deploy', 'Colocamos a solução em produção.'],
  ['Improve', 'Acompanhamos os resultados e evoluímos a solução.'],
];
function Journey() {
  return (
    <section id="processo" className="section journey" data-screen-label="Processo">
      <div className="container">
        <div className="head">
          <div className="head__text">
            <span className="label reveal">Como trabalhamos</span>
            <h2 className="h2 reveal" style={{ '--i': 1 }}>Da ideia à solução funcionando.</h2>
          </div>
        </div>
        <ol className="steps">
          {STEPS.map(([name, desc], i) => (
            <li key={name} className={`step${i === STEPS.length - 1 ? ' step--last' : ''} reveal`} style={{ '--i': i }}>
              <span className="step__dot">0{i + 1}</span>
              <h3 className="step__name">{name}</h3>
              <p className="step__desc">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Journey = Journey;
