import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar() {
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ city, propertyType, budget });
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-input-group">
        <label htmlFor="city">Ville</label>
        <input
          id="city"
          type="text"
          placeholder="Dakar, Saint-Louis..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="search-input-group">
        <label htmlFor="type">Type de bien</label>
        <select
          id="type"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Sélectionner...</option>
          <option value="apartment">Appartement</option>
          <option value="house">Maison</option>
          <option value="studio">Studio</option>
          <option value="villa">Villa</option>
        </select>
      </div>

      <div className="search-input-group">
        <label htmlFor="budget">Budget</label>
        <input
          id="budget"
          type="number"
          placeholder="Max budget (FCFA)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <button type="submit" className="search-btn">
        <Search size={20} />
        Rechercher
      </button>
    </form>
  );
}
