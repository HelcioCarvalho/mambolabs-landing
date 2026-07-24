const faqData = [
  ['O que pode ser automatizado em uma empresa?', 'Atividades repetitivas, consultas, cadastros, notificações, integrações, processamento de documentos, geração de relatórios e diversos fluxos administrativos. A viabilidade depende do processo, dos sistemas e das regras envolvidas.'],
  ['Preciso substituir os sistemas que já utilizo?', 'Nem sempre. Em muitos projetos, a solução é construída para integrar e ampliar os sistemas existentes.'],
  ['A MamboLabs trabalha apenas com grandes empresas?', 'Não. Os projetos podem ser estruturados para empresas de diferentes portes, começando por processos menores e evoluindo gradualmente.'],
  ['Minha empresa precisa ter uma equipe de tecnologia?', 'Não necessariamente. A MamboLabs pode conduzir a análise técnica, o desenvolvimento e a implantação em conjunto com os responsáveis pelo negócio.'],
  ['Quanto tempo leva um projeto?', 'O prazo depende da complexidade, do número de integrações e do escopo. Projetos podem começar por uma validação menor antes da implantação completa.'],
  ['Os agentes de IA podem acessar informações internas?', 'Sim, desde que o acesso seja tecnicamente autorizado e configurado com regras adequadas de segurança, permissão e governança.'],
  ['A IA substitui completamente o trabalho humano?', 'O objetivo principal é automatizar atividades repetitivas, organizar informações e apoiar decisões. Processos críticos podem manter revisão, aprovação ou supervisão humana.'],
  ['Como saber por onde começar?', 'O primeiro passo é mapear processos, identificar gargalos e priorizar oportunidades com impacto operacional e viabilidade técnica.'],
];
function Faq({ Accordion }) {
  const s = {
    section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
    inner: { maxWidth: 760, margin: '0 auto' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-md)', color: 'var(--white-soft)', margin: '0 0 40px', letterSpacing: '-0.02em' },
  };
  return (
    <section style={s.section} data-screen-label="FAQ">
      <div style={s.inner}>
        <h2 style={s.h2}>Perguntas frequentes</h2>
        <Accordion items={faqData.map(([q, a]) => ({ q, a }))} />
      </div>
    </section>
  );
}
window.Faq = Faq;
