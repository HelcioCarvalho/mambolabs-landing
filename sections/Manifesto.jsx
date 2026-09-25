function Manifesto() {
  return (
    <section className="section" data-screen-label="Manifesto">
      <div className="container">
        <div className="manifesto reveal">
          <div>
            <span className="label label--ink">Nosso compromisso</span>
            <h2 className="h2">Não entregamos apenas software.<span className="manifesto__hl">Entregamos processos funcionando.</span></h2>
          </div>
          <div>
            <p className="body">Você não precisa contratar diversas ferramentas, montar uma equipe técnica e descobrir sozinho como conectar tudo.</p>
            <p className="manifesto__closing">A <b>Mombo Labs</b> assume a construção da solução tecnológica.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Manifesto = Manifesto;
