const cStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--bg)' },
  inner: { maxWidth: 760, margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--text)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: '0 0 32px' },
  trust: { display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: 'var(--text)' },
  trustItem: { display: 'flex', gap: 12, alignItems: 'center' },
  dot: { width: 22, height: 22, borderRadius: '50%', background: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0 },
};
const WHATSAPP_URL = 'https://wa.me/5516992061401?text=' + encodeURIComponent('Olá, MomboLabs! Vim pelo site e gostaria de conversar.');
const TRUST = ['Conversa inicial sem compromisso', 'Análise orientada ao negócio', 'Confidencialidade das informações', 'Retorno em prazo comercial claramente definido'];
function Contact({ Button }) {
  return (
    <section id="contato" style={cStyles.section} data-screen-label="Contato">
      <div style={cStyles.inner}>
        <div>
          <h2 style={cStyles.h2}>Qual processo está limitando o crescimento da sua empresa?</h2>
          <p style={cStyles.p}>Conte pelo WhatsApp o que sua empresa precisa melhorar. A MomboLabs analisará o cenário e identificará possíveis caminhos utilizando IA, automação, integração ou desenvolvimento personalizado.</p>
          <div style={cStyles.trust}>{TRUST.map(t => <div key={t} style={cStyles.trustItem}><span style={cStyles.dot}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0D0912" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>{t}</div>)}</div>
          <div style={{ marginTop: 28 }}><Button variant="ghost" size="lg" className="mb-wa" type="button" onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener')} icon={<Icon name="whatsapp" size={20} color="#0D0912" strokeWidth={1.6} />}>Falar com a MomboLabs no WhatsApp</Button></div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
