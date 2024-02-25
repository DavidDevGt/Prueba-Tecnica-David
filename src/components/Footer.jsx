import React from 'react';
import './styles/Footer.css';
import circleIcon from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-section">
        <h2>Contacto</h2>
        <p>correo: <a href="mailto:chepechay16@gmail.com">chepechay16@gmail.com</a></p>
        <p>Teléfono: <a href="https://wa.me/50237914995">+502 37914995</a></p>
      </div>
      <div className="middle-section">
        <img src={circleIcon} alt="Progress" className="progress-circle" />
      </div>
      <div className="form-section">
        <h2>Form</h2>
        <div className="phone-input">
          <input type="tel" placeholder="teléfono" className="phone-field" />
          <button type="submit" className="submit-button">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
