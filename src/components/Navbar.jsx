import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">Immobilier</span>
        </Link>

        <div className="navbar-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="navbar-link">
              Accueil
            </Link>
          </li>

          <li className="navbar-item services-dropdown">
            <button
              className="navbar-link dropdown-toggle"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown size={16} />
            </button>
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/locations" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>
                    Locations
                  </Link>
                </li>
                <li>
                  <Link to="/sales" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>
                    Maisons à vendre
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="navbar-link">
              À propos
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="navbar-link">
              Contact
            </Link>
          </li>

          <li className="navbar-item">
            <button className="navbar-btn navbar-btn-login" onClick={() => setIsMenuOpen(false)}>
              Connexion
            </button>
          </li>

          <li className="navbar-item">
            <button className="navbar-btn navbar-btn-signup" onClick={() => setIsMenuOpen(false)}>
              S'inscrire
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
