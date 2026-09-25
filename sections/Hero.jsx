const heroStyles = {
  section: { position: 'relative', background: 'var(--bg)', overflow: 'hidden', padding: '156px 24px 32px' },
  inner: { position: 'relative', zIndex: 1, width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,1fr)', gap: 56, alignItems: 'end', marginBottom: 56 },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-display-xl)', lineHeight: 'var(--lh-tight)', letterSpacing: '-0.035em', color: 'var(--text)', margin: 0, textWrap: 'balance' },
  sub: { fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 28px' },
  ctas: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' },
  risk: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', margin: '18px 0 0' },
  stage: { position: 'relative', background: 'var(--dark)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', padding: '64px 40px 28px', boxShadow: 'var(--shadow-glow-accent)' },
  stageArt: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right', filter: 'saturate(1.35) hue-rotate(-8deg)', opacity: 0.72, pointerEvents: 'none' },
  stageFade: { position: 'absolute', inset: 0, background: 'radial-gradient(60% 90% at 85% 40%, rgba(255,122,26,.28), transparent 70%), linear-gradient(90deg, rgba(13,9,18,.96) 0%, rgba(13,9,18,.72) 42%, rgba(13,9,18,.25) 100%)', pointerEvents: 'none' },
  tag: { position: 'absolute', top: -38, transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 12, color: 'var(--on-dark-2)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-pill)', padding: '4px 10px', whiteSpace: 'nowrap' },
  resolvedTag: { position: 'absolute', right: 0, top: -40, fontFamily: 'var(--font-accent)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--dark)', background: 'var(--accent)', borderRadius: 'var(--radius-pill)', padding: '6px 12px', whiteSpace: 'nowrap' },
  caption: { position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 16, fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 12, color: 'var(--on-dark-3)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', padding: '20px 0 0', borderTop: '1px solid var(--border-on-dark)', marginTop: 18 },
};
const CHAOS_TAGS = [
  ['ERP', 0.06], ['CRM', 0.17], ['WhatsApp', 0.29], ['Planilhas', 0.4],
];
function HeroPulse() {
  const W = 1200, H = 190;
  const d = pulsePath(W, H, { chaosRatio: 0.46, tickEvery: 118, tickWidth: 40, steps: 90 });
  return (
    <div style={{ position: 'relative' }}>
      <div className="mb-stage-tags">
        {CHAOS_TAGS.map(([label, pos]) => (
          <span key={label} style={{ ...heroStyles.tag, left: `${pos * 100}%` }}>{label}</span>
        ))}
      </div>
      <span style={heroStyles.resolvedTag}>Operação MomboLabs</span>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto" preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
        <defs>
          <linearGradient id="heroPulseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F6F7F9" stopOpacity="0.28" />
            <stop offset="44%" stopColor="#F6F7F9" stopOpacity="0.5" />
            <stop offset="66%" stopColor="#FF7A1A" />
            <stop offset="100%" stopColor="#FF7A1A" />
          </linearGradient>
        </defs>
        <path d={d} fill="none" stroke="url(#heroPulseGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          pathLength="1" strokeDasharray="1" style={{ animation: 'mamboDraw 2s var(--ease-out) 0.45s both' }} />
      </svg>
    </div>
  );
}
function Hero({ Button }) {
  const go = id => () => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="topo" style={heroStyles.section} data-screen-label="Hero">
      <style>{`@keyframes mamboDraw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`}</style>
      <div style={heroStyles.inner}>
        <div className="mb-split" style={heroStyles.top}>
          <h1 className="mb-rise mb-rise-1" style={heroStyles.h1}>Sua operação tem várias partes tocando <span className="mb-mark">fora de compasso.</span></h1>
          <div>
            <p className="mb-rise mb-rise-2" style={heroStyles.sub}>A MomboLabs cria automações, agentes de IA, integrações e sistemas personalizados que colocam ERP, CRM, atendimento e planilhas para funcionar no mesmo ritmo — sem depender de tarefas manuais.</p>
            <div className="mb-rise mb-rise-3" style={heroStyles.ctas}>
              <Button variant="primary" size="lg" onClick={go('contato')}>Descubra o que pode ser automatizado</Button>
              <Button variant="ghost" size="lg" className="mb-outline" onClick={go('solucoes')}>Conheça nossas soluções</Button>
            </div>
            <p className="mb-rise mb-rise-3" style={heroStyles.risk}>Diagnóstico inicial para entender seus processos, sistemas e oportunidades de melhoria.</p>
          </div>
        </div>
        <div className="mb-rise mb-rise-4 mb-stage" style={heroStyles.stage}>
          <img className="mb-hide-sm" src="./images/mombolabs-hero.webp" alt="Ilustração de sistemas empresariais conectados por linhas de dados luminosas convergindo para um núcleo de automação" style={heroStyles.stageArt} />
          <div style={heroStyles.stageFade}></div>
          <div style={{ position: 'relative' }}>
            <HeroPulse />
            <div style={heroStyles.caption}><span>Sinais desconectados</span><span>Um só ritmo operacional</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
