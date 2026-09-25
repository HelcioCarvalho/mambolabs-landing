const cStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--bg)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'start' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: '0 0 32px' },
  trust: { display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: 'var(--text)' },
  trustItem: { display: 'flex', gap: 12, alignItems: 'center' },
  dot: { width: 22, height: 22, borderRadius: '50%', background: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0 },
  form: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 32, display: 'flex', flexDirection: 'column', gap: 18, boxShadow: '0 2px 4px rgba(13,9,18,.06), 0 30px 60px -28px rgba(13,9,18,.45)' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
  success: { fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--accent-ink)', fontSize: 16, margin: 0, padding: '14px 16px', borderRadius: 'var(--radius-md)', background: 'var(--accent-soft)' },
};
const TRUST = ['Conversa inicial sem compromisso', 'Análise orientada ao negócio', 'Confidencialidade das informações', 'Retorno em prazo comercial claramente definido'];
function Contact({ Input, Select, Textarea, Button }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contato" style={cStyles.section} data-screen-label="Contato">
      <div className="mb-split" style={cStyles.inner}>
        <div>
          <h2 style={cStyles.h2}>Qual processo está limitando o crescimento da sua empresa?</h2>
          <p style={cStyles.p}>Conte brevemente o que sua empresa precisa melhorar. A MomboLabs analisará o cenário e identificará possíveis caminhos utilizando IA, automação, integração ou desenvolvimento personalizado.</p>
          <div style={cStyles.trust}>{TRUST.map(t => <div key={t} style={cStyles.trustItem}><span style={cStyles.dot}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0D0912" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>{t}</div>)}</div>
          <div style={{ marginTop: 28 }}><Button variant="ghost" className="mb-wa" icon={<Icon name="whatsapp" size={20} color="#0D0912" strokeWidth={1.6} />}>Falar com a MomboLabs no WhatsApp</Button></div>
        </div>
        <form style={cStyles.form} onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div className="mb-grid-2" style={cStyles.row}><Input label="Nome" placeholder="Seu nome" required /><Input label="Empresa" placeholder="Nome da empresa" required /></div>
          <div className="mb-grid-2" style={cStyles.row}><Input label="Cargo" placeholder="Seu cargo" /><Input label="E-mail" type="email" placeholder="voce@empresa.com" required /></div>
          <div className="mb-grid-2" style={cStyles.row}><Input label="WhatsApp" placeholder="(11) 90000-0000" /><Select label="Tamanho da empresa" options={['1-10 pessoas', '11-50 pessoas', '51-200 pessoas', '200+ pessoas']} /></div>
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
