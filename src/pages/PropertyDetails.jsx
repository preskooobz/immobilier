import { useParams } from 'react-router-dom';
import { Phone, MessageCircle, Share2, Bed, Bath, Maximize2, Home } from 'lucide-react';
import { properties } from '../data/mockData';
import './PropertyDetails.css';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return <div className="property-not-found">Propriété non trouvée</div>;
  }

  return (
    <main className="property-details">
      <div className="container">
        <div className="gallery-section">
          <img src={property.image} alt={property.title} className="gallery-main" />
          <div className="gallery-thumbnails">
            <img src={property.image} alt={property.title} />
            <img src={property.image} alt={property.title} />
            <img src={property.image} alt={property.title} />
          </div>
        </div>

        <div className="details-container">
          <div className="details-main">
            <h1 className="property-title">{property.title}</h1>
            <p className="property-price">{property.price}</p>

            <div className="location-info">
              <span className="location-badge">{property.type}</span>
              <p>{property.district}, {property.city}</p>
            </div>

            <p className="property-description">
              {property.description}
            </p>

            <div className="characteristics">
              <h3>Caractéristiques</h3>
              <div className="characteristics-grid">
                <div className="characteristic">
                  <Bed size={20} />
                  <span>{property.bedrooms} chambres</span>
                </div>
                <div className="characteristic">
                  <Bath size={20} />
                  <span>2 salles de bain</span>
                </div>
                <div className="characteristic">
                  <Home size={20} />
                  <span>Garage</span>
                </div>
                <div className="characteristic">
                  <Maximize2 size={20} />
                  <span>{property.surface} m²</span>
                </div>
              </div>

              <div className="extra-features">
                <h4>Équipements</h4>
                <ul>
                  <li>Cuisine aménagée</li>
                  <li>Climatisation</li>
                  <li>Piscine</li>
                  <li>Parking</li>
                  <li>Sécurité 24/24</li>
                </ul>
              </div>
            </div>

            <div className="description-section">
              <h3>Description complète</h3>
              <p>
                Cette propriété magnifique est situé dans un emplacement prestigieux. Elle offre tout le confort moderne avec un design contemporain. Vous apprécierez la luminosité naturelle et les espaces généreusement dimensionnés. Les aménagements haut de gamme et la finition soignée en font une demeure exceptionnelle.
              </p>
            </div>
          </div>

          <div className="details-sidebar">
            <div className="contact-card">
              <h3>Contacter le propriétaire</h3>

              <div className="owner-info">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Owner" className="owner-image" />
                <div>
                  <p className="owner-name">Jean Dupont</p>
                  <p className="owner-role">Propriétaire</p>
                </div>
              </div>

              <button className="contact-btn phone-btn">
                <Phone size={18} />
                Appeler
              </button>

              <button className="contact-btn whatsapp-btn">
                <MessageCircle size={18} />
                WhatsApp
              </button>

              <button className="contact-btn share-btn">
                <Share2 size={18} />
                Partager
              </button>

              <div className="price-summary">
                <p>Prix total</p>
                <p className="total-price">{property.price}</p>
              </div>
            </div>

            <div className="property-info-card">
              <h4>Informations</h4>
              <div className="info-row">
                <span>Type</span>
                <strong>{property.type}</strong>
              </div>
              <div className="info-row">
                <span>Ville</span>
                <strong>{property.city}</strong>
              </div>
              <div className="info-row">
                <span>Quartier</span>
                <strong>{property.district}</strong>
              </div>
              <div className="info-row">
                <span>Surface</span>
                <strong>{property.surface} m²</strong>
              </div>
              <div className="info-row">
                <span>Chambres</span>
                <strong>{property.bedrooms}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
