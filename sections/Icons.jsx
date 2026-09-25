// Troque pelo número real (somente dígitos, com DDI + DDD). Ex.: '5511999999999'
const WHATSAPP_NUMBER = '5516992061401';
const WHATSAPP_MESSAGE = 'Olá, Mombo Labs! Tenho um processo que quero automatizar.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const ICON_PATHS = {
  bot: 'M12 2v3M7 9h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm2 5.5v1M15 14.5v1M4 12h1M19 12h1',
  workflow: 'M5 6h5v4H5zM14 14h5v4h-5z M10 8h4a2 2 0 0 1 2 2v2M9 16H7a2 2 0 0 1-2-2v-2',
  plug: 'M9 3v4M15 3v4M6 7h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6Zm6 9v4m-3 0h6',
  database: 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6',
  window: 'M4 5h16v14H4Zm0 4h16M7 7h.01M9.5 7h.01',
  chat: 'M4 5h16v11H8l-4 4Z',
  chart: 'M5 19V10M11 19V5M17 19v-7',
  document: 'M7 3h7l4 4v14H7Zm7 0v4h4M9.5 12h5M9.5 15.5h5',
  layers: 'M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  mic: 'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-6 9a6 6 0 0 0 12 0M12 18v3',
  tag: 'M3 12V4h8l10 10-8 8L3 12Zm5-4h.01',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  inbox: 'M4 13h4l2 3h4l2-3h4M4 13l3-8h10l3 8v6H4Z',
};
function Icon({ name, size = 22, color = 'currentColor', stroke = 1.7 }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
function LogoMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ flexShrink: 0 }} aria-hidden="true">
      <rect x="0.5" y="0.5" width="29" height="29" rx="8" fill="var(--primary)" stroke="var(--border)" />
      <path d="M8 21V10l7 7 7-7v11" fill="none" stroke="var(--text)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Brand() {
  return (
    <a className="brand" href="#topo" aria-label="Mombo Labs — início">
      <LogoMark />
      <span className="brand__name">Mombo Labs</span>
    </a>
  );
}
function CtaButton({ children, variant = 'primary', size = 'lg' }) {
  return (
    <a className={`btn btn--${variant} btn--${size}`} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="arrow"><Icon name="arrow" size={14} stroke={2.2} /></span>
    </a>
  );
}
window.WHATSAPP_URL = WHATSAPP_URL;
window.Icon = Icon;
window.LogoMark = LogoMark;
window.Brand = Brand;
window.CtaButton = CtaButton;
