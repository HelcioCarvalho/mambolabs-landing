const cStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--text-primary-dark)', margin: '0 0 20px', letterSpacing: '-0.02em' },
  p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary-dark)', margin: '0 0 32px' },
  trust: { display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary-dark)' },
  trustItem: { display: 'flex', gap: 10, alignItems: 'flex-start' },
  dot: { width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-500)', marginTop: 7, flexShrink: 0 },
  form: { background: 'var(--surface-card-dark-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-xl)', padding: 36, display: 'flex', flexDirection: 'column', gap: 20, boxShadow: 'var(--shadow-card-dark)' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 },
  success: { fontFamily: 'var(--font-body)', color: 'var(--accent-400)', fontSize: 15 },
};
const TRUST = ['Conversa inicial sem compromisso', 'Análise orientada ao negócio', 'Confidencialidade das informações', 'Retorno em prazo comercial claramente definido'];
function Contact({ Input, Select, Textarea, Button }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contato" style={cStyles.section} data-screen-label="Contato">
      <div style={cStyles.inner}>
        <div>
          <h2 style={cStyles.h2}>Qual processo está limitando o crescimento da sua empresa?</h2>
          <p style={cStyles.p}>Conte brevemente o que sua empresa precisa melhorar. A MamboLabs analisará o cenário e identificará possíveis caminhos utilizando IA, automação, integração ou desenvolvimento personalizado.</p>
          <div style={cStyles.trust}>{TRUST.map(t => <div key={t} style={cStyles.trustItem}><span style={cStyles.dot}></span>{t}</div>)}</div>
          <div style={{ marginTop: 28 }}><Button variant="ghost">Falar com a MamboLabs no WhatsApp</Button></div>
        </div>
        <form style={cStyles.form} onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div style={cStyles.row}><Input label="Nome" placeholder="Seu nome" required /><Input label="Empresa" placeholder="Nome da empresa" required /></div>
          <div style={cStyles.row}><Input label="Cargo" placeholder="Seu cargo" /><Input label="E-mail" type="email" placeholder="voce@empresa.com" required /></div>
          <div style={cStyles.row}><Input label="WhatsApp" placeholder="(11) 90000-0000" /><Select label="Tamanho da empresa" options={['1-10 pessoas', '11-50 pessoas', '51-200 pessoas', '200+ pessoas']} /></div>
          <Input label="Principal desafio" placeholder="Ex.: atendimento lento, sistemas desconectados..." />
          <Input label="Sistemas utilizados" placeholder="Ex.: ERP, CRM, WhatsApp..." />
          <Textarea label="Mensagem" placeholder="Conte brevemente o que precisa melhorar" rows={4} />
          {sent ? <p style={cStyles.success}>Recebemos sua mensagem — retornaremos em breve.</p> : <Button variant="primary" size="lg">Solicitar uma análise</Button>}
        </form>
      </div>
    </section>
  );
}
window.Contact = Contact;
