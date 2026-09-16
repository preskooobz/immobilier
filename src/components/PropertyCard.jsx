import { Bed, Maximize2, MapPin } from 'lucide-react';
import './PropertyCard.css';

export default function PropertyCard({ property }) {
  const {
    id,
    image,
    price,
    type,
    city,
    district,
    bedrooms,
    surface,
    title
  } = property;

  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={image} alt={title} className="property-image" />
        <span className="property-type">{type}</span>
        <span className="property-price">{price}</span>
      </div>

      <div className="property-content">
        <h3 className="property-title">{title}</h3>

        <div className="property-location">
          <MapPin size={16} />
          <span>{district}, {city}</span>
        </div>

        <div className="property-features">
          <div className="feature">
            <Bed size={18} />
            <span>{bedrooms} chambres</span>
          </div>
          <div className="feature">
            <Maximize2 size={18} />
            <span>{surface} m²</span>
          </div>
        </div>

        <button className="property-btn">Voir les détails</button>
      </div>
    </div>
  );
}
