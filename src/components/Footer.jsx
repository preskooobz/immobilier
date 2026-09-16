import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Send, Link2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Immobilier</h3>
            <p className="footer-description">
              Votre plateforme de confiance pour trouver le logement idéal.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Site web"><Globe size={20} /></a>
              <a href="#" aria-label="Messagerie"><MessageCircle size={20} /></a>
              <a href="#" aria-label="Newsletter"><Send size={20} /></a>
              <a href="#" aria-label="Lien externe"><Link2 size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/sales">Maisons à vendre</Link></li>
              <li><Link to="/about">À propos</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Légal</h4>
            <ul className="footer-links">
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Conditions d'utilisation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:+221765432100">+221 76 543 210</a></li>
              <li><a href="mailto:contact@immobilier.sn">contact@immobilier.sn</a></li>
              <li><a href="/contact">Nous contacter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Immobilier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
