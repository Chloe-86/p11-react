import React from 'react';
import logo from '../assets/img/logo.svg'
import footer from '../styles/footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
      <img src={logo} alt="logo" />
      <p>© 2020. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
