import React, { useState } from 'react';
import './styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      {/* Botón de menú hamburguesa */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Enlaces del menú, su visibilidad es controlada por isNavExpanded */}
      <div className={`navbar-links ${isNavExpanded ? "active" : ""}`}>
        <a href="https://es.reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a>
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite.js</a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind.css</a>
      </div>
    </nav>
  );
};
export default Navbar;
