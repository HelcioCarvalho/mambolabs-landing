const exStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 640 },
  visualGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 },
  visual: { position: 'relative', minHeight: 320, overflow: 'hidden', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', background: 'var(--graphite-950)' },
  image: { width: '100%', height: '100%', minHeight: 320, display: 'block', objectFit: 'cover' },
  imageShade: { position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(21,16,12,.94) 0%, rgba(21,16,12,.08) 58%)' },
  visualCopy: { position: 'absolute', left: 24, right: 24, bottom: 22 },
  visualKicker: { display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-400)', marginBottom: 7 },
  visualTitle: { fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, color: 'var(--white-soft)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border-dark)', border: '1px solid var(--border-dark)' },
  card: { background: 'var(--graphite-950)', padding: 28 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--text-primary-dark)', margin: '0 0 8px' },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: 0 },
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
          <div style={exStyles.visual}>
            <img src="./images/mambolabs-integracoes.png" alt="Representação abstrata de sistemas empresariais conectados por uma camada central de automação" style={exStyles.image} />
            <div style={exStyles.imageShade}></div>
            <div style={exStyles.visualCopy}>
              <span style={exStyles.visualKicker}>Integrações</span>
              <h3 style={exStyles.visualTitle}>Sistemas diferentes. Uma operação conectada.</h3>
            </div>
          </div>
          <div style={exStyles.visual}>
            <img src="./images/mambolabs-documentos.png" alt="Representação abstrata de documentos sendo transformados em dados organizados por inteligência artificial" style={exStyles.image} />
            <div style={exStyles.imageShade}></div>
            <div style={exStyles.visualCopy}>
              <span style={exStyles.visualKicker}>Inteligência artificial</span>
              <h3 style={exStyles.visualTitle}>Informação dispersa transformada em ação.</h3>
            </div>
          </div>
        </div>
        <div className="mb-grid-3" style={exStyles.grid}>
          {EXAMPLES.map(([icon, t, d]) => (
            <div key={t} style={exStyles.card}><IconBadge name={icon} size={36} /><h3 style={{ ...exStyles.title, marginTop: 12 }}>{t}</h3><p style={exStyles.desc}>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Examples = Examples;
