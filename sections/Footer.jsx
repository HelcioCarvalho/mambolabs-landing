function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Brand />
            <p className="footer__tagline">Soluções de IA e automação entregues para o seu negócio.</p>
          </div>
          <div>
            <div className="footer__title">Navegação</div>
            <a href="#entregas" className="footer__link">O que entregamos</a>
            <a href="#processo" className="footer__link">Como trabalhamos</a>
            <a href="#exemplos" className="footer__link">Exemplos</a>
          </div>
          <div>
            <div className="footer__title">Contato</div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer__link">WhatsApp</a>
            <a href="mailto:contato@mombolabs.com" className="footer__link">contato@mombolabs.com</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Mombo Labs. Todos os direitos reservados.</span>
          <span>AI Delivery · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
