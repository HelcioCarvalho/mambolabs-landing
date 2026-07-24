const heroStyles = {
  section: { position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--graphite-950)', overflow: 'hidden', padding: '160px 24px 100px' },
  glow: { position: 'absolute', top: '-25%', right: '-15%', width: '75%', height: '95%', background: 'radial-gradient(circle, rgba(139,92,246,0.24) 0%, rgba(255,61,122,0.10) 40%, transparent 68%)', filter: 'blur(40px)', pointerEvents: 'none' },
  glow2: { position: 'absolute', top: '-10%', left: '-15%', width: '55%', height: '70%', background: 'radial-gradient(circle, rgba(255,122,26,0.20) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' },
  grid: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border-dark) 1px, transparent 1px), linear-gradient(90deg, var(--border-dark) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.25, maskImage: 'radial-gradient(ellipse at 60% 30%, black 0%, transparent 70%)' },
  inner: { position: 'relative', zIndex: 1, width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' },
  eyebrow: { display: 'inline-flex', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-500)', marginBottom: 20 },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-xl)', lineHeight: 'var(--lh-tight)', letterSpacing: '-0.02em', color: 'var(--white-soft)', margin: '0 0 24px' },
  sub: { fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.6, color: 'var(--text-secondary-dark)', maxWidth: 520, margin: '0 0 36px' },
  ctas: { display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20 },
  risk: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-tertiary-dark)' },
  panel: { position: 'relative', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-dark)', background: 'var(--surface-card-dark)', boxShadow: 'var(--shadow-card-dark)', padding: '32px 20px', overflow: 'hidden' },
};
const IBOX = { in: 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6', crm: 'M5 19V10M11 19V5M17 19v-7', wa: 'M4 5h16v11H8l-4 4Z', bot: 'M12 2v3M7 9h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm2 5.5v1M15 14.5v1M4 12h1M19 12h1', check: 'M9 12l2 2 4-5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' };
function HeroIllustration() {
  const inputs = [
    { y: 46, icon: IBOX.in, label: 'ERP' },
    { y: 168, icon: IBOX.crm, label: 'CRM' },
    { y: 290, icon: IBOX.wa, label: 'WhatsApp' },
  ];
  return (
    <svg viewBox="0 0 480 350" width="100%" height="auto" style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="heroFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--slate-500)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="heroFlowOut" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-alt-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--white-soft)" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="heroHub" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="var(--accent-400)" />
          <stop offset="55%" stopColor="var(--accent-alt-500)" />
          <stop offset="100%" stopColor="var(--violet-500)" />
        </radialGradient>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="252" cy="172" r="110" fill="url(#heroGlow)" />

      {inputs.map((n, i) => (
        <path key={i} d={`M60,${n.y} C150,${n.y} 150,172 210,172`} stroke="url(#heroFlow)" strokeWidth="2" fill="none" opacity="0.8" />
      ))}
      <path d="M304,172 C350,172 350,172 400,172" stroke="url(#heroFlowOut)" strokeWidth="2.5" fill="none" />

      {inputs.map((n, i) => (
        <g key={i}>
          <rect x="20" y={n.y - 20} width="40" height="40" rx="10" fill="var(--surface-card-dark-raised)" stroke="var(--border-dark)" />
          <g transform={`translate(30, ${n.y - 10})`}>
            <path d={n.icon} stroke="var(--slate-300)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="70" y={n.y + 5} fontFamily="var(--font-body)" fontSize="14" fill="var(--text-secondary-dark)">{n.label}</text>
        </g>
      ))}

      <circle cx="257" cy="172" r="47" fill="url(#heroHub)" />
      <g transform="translate(233, 148)">
        <path d={IBOX.bot} stroke="var(--graphite-950)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="257" y="240" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="15" fill="var(--white-soft)">Agente MamboLabs</text>

      <rect x="400" y="152" width="40" height="40" rx="10" fill="var(--surface-card-dark-raised)" stroke="var(--accent-alt-500)" />
      <g transform="translate(410, 162)">
        <path d={IBOX.check} stroke="var(--accent-alt-500)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="337" y="292" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14" fill="var(--text-secondary-dark)">Resposta ao<tspan x="337" dy="18">cliente</tspan></text>
    </svg>
  );
}
function Hero({ Button, Badge }) {
  return (
    <section id="topo" style={heroStyles.section} data-screen-label="Hero">
      <div style={heroStyles.glow}></div>
      <div style={heroStyles.glow2}></div>
      <div style={heroStyles.grid}></div>
      <div style={heroStyles.inner}>
        <div>
          <Badge>Diagnóstico e implementação</Badge>
          <h1 style={heroStyles.h1}>Sua empresa pode<br />operar de forma<br />mais inteligente.</h1>
          <p style={heroStyles.sub}>A MamboLabs cria automações, agentes de IA, integrações e sistemas personalizados que eliminam tarefas repetitivas, conectam informações e aceleram a operação do seu negócio.</p>
          <div style={heroStyles.ctas}>
            <Button variant="primary" size="lg">Descubra o que pode ser automatizado</Button>
            <Button variant="ghost" size="lg">Conheça nossas soluções</Button>
          </div>
          <p style={heroStyles.risk}>Diagnóstico inicial para entender seus processos, sistemas e oportunidades de melhoria.</p>
        </div>
        <div style={heroStyles.panel}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
