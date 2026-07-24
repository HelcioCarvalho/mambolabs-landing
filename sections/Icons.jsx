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
  shieldCheck: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Zm-3 8 2 2 4-4',
};
function Icon({ name, size = 22, color = 'var(--accent-500)' }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
function IconBadge({ name, size = 40 }) {
  const badge = {
    width: size, height: size, borderRadius: 'var(--radius-md)',
    background: 'linear-gradient(135deg, rgba(255,122,26,0.16), rgba(255,61,122,0.10))',
    border: '1px solid rgba(255,122,26,0.25)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  };
  return <div style={badge}><Icon name={name} size={size * 0.5} /></div>;
}
const DOT_GRID = [[3,3],[11,3],[19,3],[3,11],[11,11],[19,11],[3,19],[11,19],[19,19]];
function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id="logoMarkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" />
          <stop offset="100%" stopColor="var(--accent-alt-500)" />
        </linearGradient>
      </defs>
      <rect width="22" height="22" rx="6" fill="url(#logoMarkGrad)" />
      {DOT_GRID.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.6" fill="var(--graphite-950)" opacity={i === 4 ? 1 : 0.85} />)}
    </svg>
  );
}
window.Icon = Icon;
window.IconBadge = IconBadge;
window.LogoMark = LogoMark;
