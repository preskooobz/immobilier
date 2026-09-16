import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import SectionTitle from '../components/SectionTitle';
import { properties } from '../data/mockData';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import './Properties.css';

export default function Sales() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let result = properties;

    if (currentFilters.city) {
      result = result.filter(p => p.city.toLowerCase().includes(currentFilters.city.toLowerCase()));
    }

    if (currentFilters.type) {
      result = result.filter(p => p.type.toLowerCase().includes(currentFilters.type.toLowerCase()));
    }

    if (currentFilters.bedrooms) {
      result = result.filter(p => p.bedrooms >= parseInt(currentFilters.bedrooms));
    }

    setFilteredProperties(result);
  };

  return (
    <main className="properties-page">
      <Hero
        title="Investissez dans votre futur logement."
        subtitle="Explorez les meilleures offres de maisons et villas disponibles à la vente."
      />

      <div className="properties-container">
        <div className="filters-section">
          <div className="filters-header">
            <Filter size={20} />
            <h3>Filtres</h3>
          </div>

          <div className="filter-group">
            <label htmlFor="city">Ville</label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Dakar, Saint-Louis..."
              value={filters.city}
              onChange={handleFilterChange}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="type">Type de bien</label>
            <select
              id="type"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="">Tous les types</option>
              <option value="Appartement">Appartement</option>
              <option value="Maison">Maison</option>
              <option value="Studio">Studio</option>
              <option value="Villa">Villa</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="bedrooms">Nombre de chambres</label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
            >
              <option value="">Tous</option>
              <option value="1">1 chambre ou plus</option>
              <option value="2">2 chambres ou plus</option>
              <option value="3">3 chambres ou plus</option>
              <option value="4">4 chambres ou plus</option>
            </select>
          </div>

          <button className="filter-btn" onClick={() => {
            setFilters({ city: '', type: '', minPrice: '', maxPrice: '', bedrooms: '' });
            setFilteredProperties(properties);
          }}>
            Réinitialiser les filtres
          </button>
        </div>

        <div className="properties-list-section">
          <SectionTitle
            title="Annonces disponibles"
            subtitle={`${filteredProperties.length} bien${filteredProperties.length > 1 ? 's' : ''} trouvé${filteredProperties.length > 1 ? 's' : ''}`}
          />

          {filteredProperties.length > 0 ? (
            <div className="properties-grid">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>Aucune annonce ne correspond à vos critères. Veuillez modifier vos filtres.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
