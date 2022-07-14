import React from 'react'

//Images
import logoFooter from '../../assets/logoFooter.svg';
import barFooter from '../../assets/barFooter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__img" src={logoFooter} alt="footer logo" />
      <p className="footer__p">
        La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020.
        All rights reserved. Los contenidos de esta publicación se redactan solo
        con fines informativos. En ningún momento pueden servir para facilitar
        diagnósticos o sustituir la labor de un profesional. Le recomendamos que
        contacte con su especialista de confianza.
      </p>
      <img src={barFooter} alt="" className="footer__bar" />
      <div className="footer__links">
        <a href='/#'>Politica de cookies</a>
        <a href='/#'>Politica de privacidad</a>
        <a href='/#'>Terminos y condiciones de uso</a>
        <a href='/#'>Clausula informativa y de consentimiento</a>
      </div>
    </footer>
  );
}

export default Footer