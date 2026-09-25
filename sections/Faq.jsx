const faqData = [
  ['O que pode ser automatizado em uma empresa?', 'Atividades repetitivas, consultas, cadastros, notificações, integrações, processamento de documentos, geração de relatórios e diversos fluxos administrativos. A viabilidade depende do processo, dos sistemas e das regras envolvidas.'],
  ['Preciso substituir os sistemas que já utilizo?', 'Nem sempre. Em muitos projetos, a solução é construída para integrar e ampliar os sistemas existentes.'],
  ['A MomboLabs trabalha apenas com grandes empresas?', 'Não. Os projetos podem ser estruturados para empresas de diferentes portes, começando por processos menores e evoluindo gradualmente.'],
  ['Minha empresa precisa ter uma equipe de tecnologia?', 'Não necessariamente. A MomboLabs pode conduzir a análise técnica, o desenvolvimento e a implantação em conjunto com os responsáveis pelo negócio.'],
  ['Quanto tempo leva um projeto?', 'O prazo depende da complexidade, do número de integrações e do escopo. Projetos podem começar por uma validação menor antes da implantação completa.'],
  ['Os agentes de IA podem acessar informações internas?', 'Sim, desde que o acesso seja tecnicamente autorizado e configurado com regras adequadas de segurança, permissão e governança.'],
  ['A IA substitui completamente o trabalho humano?', 'O objetivo principal é automatizar atividades repetitivas, organizar informações e apoiar decisões. Processos críticos podem manter revisão, aprovação ou supervisão humana.'],
  ['Como saber por onde começar?', 'O primeiro passo é mapear processos, identificar gargalos e priorizar oportunidades com impacto operacional e viabilidade técnica.'],
];
function Faq({ Accordion }) {
  const s = {
    section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--surface)' },
    inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.7fr) minmax(0,1.3fr)', gap: 64, alignItems: 'start' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 16px', letterSpacing: 'var(--tracking-tight)' },
    p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 },
  };
  return (
    <section style={s.section} data-screen-label="FAQ">
      <div className="mb-split" style={s.inner}>
        <div className="mb-sticky" style={{ position: 'sticky', top: 112 }}>
          <h2 style={s.h2}>Perguntas frequentes</h2>
          <p style={s.p}>Não encontrou sua dúvida? <a href="#contato">Fale com a gente</a>.</p>
        </div>
        <div className="mb-faq" style={{ borderTop: '1px solid var(--border)' }}><Accordion items={faqData.map(([q, a]) => ({ q, a }))} /></div>
      </div>
    </section>
  );
}
window.Faq = Faq;
