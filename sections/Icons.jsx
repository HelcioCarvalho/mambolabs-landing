const ICON_PATHS = {
  bot: 'M12 2v3M7 9h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm2 5.5v1M15 14.5v1M4 12h1M19 12h1',
  workflow: 'M5 6h5v4H5zM14 14h5v4h-5z M10 8h4a2 2 0 0 1 2 2v2M9 16H7a2 2 0 0 1-2-2v-2',
  plug: 'M9 3v4M15 3v4M6 7h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6Zm6 9v4m-3 0h6',
  database: 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6',
  window: 'M4 5h16v14H4Zm0 4h16M7 7h.01M9.5 7h.01',
  chat: 'M4 5h16v11H8l-4 4Z',
  chart: 'M5 19V10M11 19V5M17 19v-7',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2.5-13.5-2 5.5-5.5 2 2-5.5 5.5-2Z',
  document: 'M7 3h7l4 4v14H7Zm7 0v4h4M9.5 12h5M9.5 15.5h5',
  funnel: 'M4 4h16l-6 8v6l-4 2v-8Z',
  book: 'M5 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H5ZM19 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6Z',
  layoutDashboard: 'M4 4h7v9H4ZM13 4h7v5h-7ZM13 11h7v9h-7ZM4 15h7v5H4Z',
  messageCircle: 'M20 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5Z',
  barChart3: 'M4 4v16h16M8 16v-5M12.5 16V8M17 16v-3',
  briefcase: 'M4 8h16v11H4ZM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16',
  messageSquare: 'M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z',
  fileText: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Zm0 0v5h5M9 13h6M9 17h6M9 9h1',
  userPlus: 'M15 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19 8v6M22 11h-6',
  bookOpen: 'M3 5h6a3 3 0 0 1 3 3v12a2.5 2.5 0 0 0-2.5-2.5H3ZM21 5h-6a3 3 0 0 0-3 3v12a2.5 2.5 0 0 1 2.5-2.5H21Z',
  fileBarChart: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Zm0 0v5h5M9 17v-2M12 17v-5M15 17v-3',
  checkCircle: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM8 12.5l2.8 2.8L16.5 9.5',
  gitMerge: 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9v6M6 9a9 9 0 0 0 9 6',
  monitor: 'M3 4h18v12H3ZM8 20h8M12 16v4',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01',
  wrench: 'M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 0-5-5l3 3-2 2-3-3a4 4 0 0 0 5 5',
  trendingUp: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  whatsapp: 'M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm-3.2 5.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6.5.9 1.3 1.7 2.3 2.2.3.1.4.1.6-.1l.7-.8c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.4.4 0 .6-.3 1.3-.9 1.7-.6.4-1.5.6-2.6.2a8.6 8.6 0 0 1-4.9-4.6c-.5-1.1-.4-2.1.2-2.9Z',
  shieldCheck: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Zm-3 8 2 2 4-4',
};
function Icon({ name, size = 22, color = 'var(--accent-ink)', strokeWidth = 1.7 }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
function IconBadge({ name, size = 40 }) {
  const badge = {
    width: size, height: size, borderRadius: 'var(--radius-md)',
    background: 'var(--accent-soft)',
    border: '1px solid var(--accent-line)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  };
  return <div style={badge}><Icon name={name} size={size * 0.5} color="var(--accent-ink)" /></div>;
}

/* Pulse — the recurring "chaos resolves into a steady beat" motif.
   Deterministic (no Math.random) so the drawn path is stable across re-renders. */
const PULSE_NOISE = [0.9, -0.4, 1, -0.75, 0.3, -1, 0.55, -0.2, 0.85, -0.6, 0.4, -0.9, 0.65, -0.35, 0.95, -0.5];
function pulsePoints(width, height, { chaosRatio = 0.46, tickEvery = 64, tickWidth = 24, steps = 48 } = {}) {
  const midY = height / 2;
  const maxAmp = height * 0.42;
  const chaosEndX = width * chaosRatio;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    let x = (i / steps) * width;
    const settle = Math.min(1, Math.max(0, (x - chaosEndX * 0.25) / (width * 0.42)));
    const noise = PULSE_NOISE[i % PULSE_NOISE.length];
    if (settle < 1) x += noise * (width / steps) * 0.85 * (1 - settle);
    let y = midY;
    if (settle < 1) y += noise * maxAmp * (1 - settle);
    if (settle > 0) {
      const beatX = ((x % tickEvery) + tickEvery) % tickEvery;
      let beatY = 0;
      if (beatX > tickEvery - tickWidth) {
        const bt = (beatX - (tickEvery - tickWidth)) / tickWidth;
        beatY = Math.sin(bt * Math.PI * 2) * maxAmp * 0.9;
      }
      y += beatY * settle;
    }
    pts.push([x, y]);
  }
  return pts;
}
function pulsePath(width, height, opts) {
  return pulsePoints(width, height, opts).map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
}
function PulseLine({ width = 640, height = 80, id = 'pulse', from = '#B4AFBC', to = '#FF7A1A', strokeWidth = 2, opts, style }) {
  const d = pulsePath(width, height, opts);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="auto" preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible', ...style }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={from} stopOpacity="0.55" />
          <stop offset="48%" stopColor={from} stopOpacity="0.85" />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke={`url(#${id})`} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function LogoMark({ size = 32, alt = '' }) {
  return <img src="./images/mombolabs-mark.webp" alt={alt} aria-hidden={alt ? undefined : 'true'} height={size} width={Math.round(size * 1.35)} style={{ flexShrink: 0, display: 'block' }} />;
}
window.Icon = Icon;
window.IconBadge = IconBadge;
window.LogoMark = LogoMark;
window.PulseLine = PulseLine;
window.pulsePath = pulsePath;
window.pulsePoints = pulsePoints;
