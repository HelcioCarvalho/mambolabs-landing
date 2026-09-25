const exStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--paper)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 720, textWrap: 'balance' },
  visualGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 },
  visual: { position: 'relative', minHeight: 340, overflow: 'hidden', borderRadius: 'var(--radius-xl)', background: 'var(--night)' },
  image: { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', objectFit: 'cover', filter: 'grayscale(1) contrast(1.15) brightness(0.9)', opacity: 0.55 },
  imageShade: { position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(42,43,34,.96) 0%, rgba(42,43,34,.35) 55%, rgba(42,43,34,.1) 100%)' },
  visualCopy: { position: 'absolute', left: 28, right: 28, bottom: 26 },
  visualKicker: { display: 'inline-block', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 11.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--night)', background: 'var(--lime)', borderRadius: 'var(--radius-pill)', padding: '5px 11px', marginBottom: 14 },
  visualTitle: { fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.2, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--on-night)', margin: 0, maxWidth: 420 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 },
  card: { background: 'var(--canvas)', border: '1px solid transparent', borderRadius: 'var(--radius-lg)', padding: 24, display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--ink)', margin: '0 0 6px', letterSpacing: '-0.01em' },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 },
};
const EXAMPLES = [
  ['bot', 'Assistente comercial inteligente', 'Um agente que consulta produtos, preços, clientes e histórico para ajudar a equipe comercial a responder com mais rapidez.'],
  ['chat', 'Atendimento conectado ao ERP', 'O cliente pergunta pelo WhatsApp sobre pedido, estoque ou entrega, e a IA consulta o sistema para gerar a resposta.'],
  ['document', 'Leitura e processamento de documentos', 'A IA recebe contratos, notas ou formulários, extrai informações e envia os dados para o processo correto.'],
  ['funnel', 'Automação de leads', 'Novos contatos são recebidos, classificados, registrados no CRM e encaminhados automaticamente para o responsável.'],
  ['book', 'Assistente interno de conhecimento', 'Funcionários consultam políticas, procedimentos e manuais utilizando uma conversa em linguagem natural.'],
  ['chart', 'Relatórios automáticos', 'Dados são coletados de diferentes sistemas, organizados e enviados periodicamente para os gestores.'],
  ['shieldCheck', 'Aprovações automatizadas', 'Solicitações são direcionadas aos responsáveis, acompanhadas e registradas sem depender de trocas manuais.'],
  ['plug', 'Integração entre plataformas', 'Uma informação cadastrada em um sistema é automaticamente validada e transmitida para os demais.'],
  ['window', 'Portais e sistemas personalizados', 'Criação de ambientes para clientes, fornecedores ou equipes acompanharem informações e processos.'],
];
function Examples() {
  return (
    <section id="exemplos" style={exStyles.section} data-screen-label="Exemplos de aplicação">
      <div style={exStyles.inner}>
        <h2 style={exStyles.h2}>O que a MomboLabs pode construir para sua empresa?</h2>
        <div className="mb-visual-grid" style={exStyles.visualGrid}>
          <div className="mb-reveal" style={exStyles.visual}>
            <img src="./images/mambolabs-integracoes.png" alt="Representação abstrata de sistemas empresariais conectados por uma camada central de automação" style={exStyles.image} loading="lazy" />
            <div style={exStyles.imageShade}></div>
            <div style={exStyles.visualCopy}>
              <span style={exStyles.visualKicker}>Integrações</span>
              <h3 style={exStyles.visualTitle}>Sistemas diferentes. Uma operação conectada.</h3>
            </div>
          </div>
          <div className="mb-reveal" style={exStyles.visual}>
            <img src="./images/mambolabs-documentos.png" alt="Representação abstrata de documentos sendo transformados em dados organizados por inteligência artificial" style={exStyles.image} loading="lazy" />
            <div style={exStyles.imageShade}></div>
            <div style={exStyles.visualCopy}>
              <span style={exStyles.visualKicker}>Inteligência artificial</span>
              <h3 style={exStyles.visualTitle}>Informação dispersa transformada em ação.</h3>
            </div>
          </div>
        </div>
        <div className="mb-grid-3" style={exStyles.grid}>
          {EXAMPLES.map(([icon, t, d]) => (
            <div key={t} className="mb-lift mb-reveal" style={exStyles.card}><IconBadge name={icon} size={40} /><div><h3 style={exStyles.title}>{t}</h3><p style={exStyles.desc}>{d}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Examples = Examples;
