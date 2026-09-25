const heroStyles = {
  section: { position: 'relative', background: 'var(--graphite-950)', overflow: 'hidden', padding: '176px 24px 0' },
  artwork: { position: 'absolute', zIndex: 0, top: 58, right: '-12%', width: '82%', height: 610, objectFit: 'cover', objectPosition: 'center right', opacity: 0.62, mixBlendMode: 'screen', pointerEvents: 'none' },
  artworkFade: { position: 'absolute', zIndex: 0, inset: 0, background: 'linear-gradient(90deg, var(--graphite-950) 0%, rgba(21,16,12,.94) 31%, rgba(21,16,12,.28) 72%, rgba(21,16,12,.68) 100%), linear-gradient(0deg, var(--graphite-950) 0%, transparent 38%)', pointerEvents: 'none' },
  wash: { position: 'absolute', inset: 0, background: 'radial-gradient(900px circle at 16% 0%, rgba(201,138,63,0.12), transparent 55%), radial-gradient(700px circle at 84% 10%, rgba(79,157,138,0.08), transparent 55%)', pointerEvents: 'none' },
  inner: { position: 'relative', zIndex: 1, width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto' },
  eyebrow: { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 12.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-400)', marginBottom: 22 },
  eyebrowTick: { width: 14, height: 1.5, background: 'var(--accent-500)' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display-xl)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white-soft)', margin: '0 0 26px', maxWidth: 780 },
  sub: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-secondary-dark)', maxWidth: 560, margin: '0 0 40px' },
  ctas: { display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20, alignItems: 'center' },
  risk: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-tertiary-dark)', marginBottom: 72 },
  stage: { position: 'relative', borderTop: '1px solid var(--border-dark)', padding: '40px 0 0' },
  tag: { position: 'absolute', top: 0, transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-tertiary-dark)', background: 'var(--graphite-950)', padding: '0 10px', whiteSpace: 'nowrap' },
  resolvedTag: { position: 'absolute', right: 0, top: 0, transform: 'translateY(-50%)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-400)', background: 'var(--graphite-950)', padding: '0 0 0 10px' },
  caption: { display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-tertiary-dark)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', padding: '14px 0 56px' },
};
const CHAOS_TAGS = [
  ['ERP', 0.06], ['CRM', 0.17], ['WhatsApp', 0.29], ['Planilhas', 0.4],
];
function HeroPulse() {
  const W = 1200, H = 210;
  const d = pulsePath(W, H, { chaosRatio: 0.46, tickEvery: 118, tickWidth: 40, steps: 90 });
  return (
    <div style={{ position: 'relative' }}>
      {CHAOS_TAGS.map(([label, pos]) => (
        <span key={label} style={{ ...heroStyles.tag, left: `${pos * 100}%` }}>{label}</span>
      ))}
      <span style={heroStyles.resolvedTag}>Operação MomboLabs</span>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto" preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <linearGradient id="heroPulseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--slate-500)" stopOpacity="0.5" />
            <stop offset="46%" stopColor="var(--slate-400)" stopOpacity="0.75" />
            <stop offset="72%" stopColor="var(--accent-400)" />
            <stop offset="100%" stopColor="var(--accent-500)" />
          </linearGradient>
        </defs>
        <path d={d} fill="none" stroke="url(#heroPulseGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          pathLength="1" strokeDasharray="1" style={{ animation: 'mamboDraw 1.8s var(--ease-out) 0.15s forwards' }} />
      </svg>
    </div>
  );
}
function Hero({ Button, Badge }) {
  return (
    <section id="topo" style={heroStyles.section} data-screen-label="Hero">
      <style>{`@keyframes mamboDraw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`}</style>
      <img className="mb-hero-artwork" src="./images/mambolabs-hero.png" alt="" aria-hidden="true" style={heroStyles.artwork} />
      <div style={heroStyles.artworkFade}></div>
      <div style={heroStyles.wash}></div>
      <div style={heroStyles.inner}>
        <span style={heroStyles.eyebrow}><span style={heroStyles.eyebrowTick}></span>Diagnóstico e implementação</span>
        <h1 style={heroStyles.h1}>Sua operação tem várias partes tocando <em style={{ fontStyle: 'italic', color: 'var(--accent-400)' }}>fora de compasso.</em></h1>
        <p style={heroStyles.sub}>A MomboLabs cria automações, agentes de IA, integrações e sistemas personalizados que colocam ERP, CRM, atendimento e planilhas para funcionar no mesmo ritmo — sem depender de tarefas manuais.</p>
        <div style={heroStyles.ctas}>
          <Button variant="primary" size="lg">Descubra o que pode ser automatizado</Button>
          <Button variant="ghost" size="lg">Conheça nossas soluções</Button>
        </div>
        <p style={heroStyles.risk}>Diagnóstico inicial para entender seus processos, sistemas e oportunidades de melhoria.</p>
        <div style={heroStyles.stage}>
          <HeroPulse />
          <div style={heroStyles.caption}><span>Sinais desconectados</span><span>Um só ritmo operacional</span></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
