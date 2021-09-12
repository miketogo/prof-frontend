import '../../index.css';
import './Footer.css';
import React from "react";






function Footer(props) {
  return (
    <footer className="footer">
      <a className="footer__text" target="_blank" rel="noreferrer" href="https://www.instagram.com/martsstudio.ru">Сайт разработан martsstudio.ru</a>
      <div className="footer__container">
        <p className="footer__copyright">© 2021</p>
        <div className="footer__links">
        <a className="footer__link" target="_blank" rel="noreferrer" href="mailto:support@prof-uk.ru">support@prof-uk.ru</a>
        <a className="footer__link"  href="tel:88124949798">8 (812) 494-97-28</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
