const exStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 640 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 },
  card: { background: 'var(--surface-card-dark)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: 28, boxShadow: 'var(--shadow-card-dark)' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-primary-dark)', margin: '0 0 8px' },
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
        <h2 style={exStyles.h2}>O que a MamboLabs pode construir para sua empresa?</h2>
        <div style={exStyles.grid}>
          {EXAMPLES.map(([icon, t, d]) => (
            <div key={t} style={exStyles.card}><IconBadge name={icon} size={36} /><h3 style={{ ...exStyles.title, marginTop: 12 }}>{t}</h3><p style={exStyles.desc}>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Examples = Examples;
