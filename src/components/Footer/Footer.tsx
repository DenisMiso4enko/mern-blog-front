import React from 'react';
import footerLogo from '../../assets/footer-logo.svg';
import './index.scss';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content container">
        <img className="footer__logo" src={footerLogo} alt="logo" />
        <div className="footer__links">icons</div>
        <div className="footer__info">All Rights Reserved {date} 3layers</div>
      </div>
    </footer>
  );
};

export default Footer;
