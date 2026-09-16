import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';
import SectionTitle from '../components/SectionTitle';
import { properties, features, testimonials } from '../data/mockData';
import './Home.css';
import heroImage from '../assets/heroImage.jpg';
import faqImage from '../assets/faqImage.jpg';

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <Hero
        eyebrow="Plateforme immobilière moderne"
        title="Trouvez le logement idéal en toute simplicité."
        subtitle="Découvrez des appartements, villas, studios et maisons à vendre ou à louer partout au Sénégal. Une plateforme moderne qui simplifie votre recherche immobilière."
        showButtons={true}
        backgroundImage={heroImage}
        buttons={[
          { label: 'Rechercher une location', variant: 'primary' },
          { label: 'Voir les maisons à vendre', variant: 'secondary' }
        ]}
      />

      {/* Search Bar */}
      <div className="search-bar-section">
        <SearchBar />
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            <div className="category-card location-card">
              <div className="category-icon">🏠</div>
              <h3>Locations</h3>
              <p>Découvrez des appartements, studios, villas et maisons disponibles à la location dans différents quartiers.</p>
              <button className="category-btn">Explorer</button>
            </div>

            <div className="category-card sales-card">
              <div className="category-icon">🏡</div>
              <h3>Maisons à vendre</h3>
              <p>Trouvez la maison idéale parmi une sélection de biens proposés par des particuliers et des agences.</p>
              <button className="category-btn">Découvrir</button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Properties Section */}
      <section className="properties-section">
        <div className="container">
          <SectionTitle
            title="Les biens récents"
            subtitle="Découvrez les dernières annonces immobilières publiées sur notre plateforme"
          />

          <div className="properties-grid">
            {properties.slice(0, 6).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <SectionTitle
            title="Pourquoi choisir notre plateforme ?"
            subtitle="Nous offrons les meilleures fonctionnalités pour votre recherche immobilière"
          />

          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <SectionTitle
            title="Témoignages"
            subtitle="Ce que nos utilisateurs pensent de notre plateforme"
          />

          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="faq-highlight">
        <div className="container faq-grid">
          <div className="faq-copy">
            <SectionTitle
              title="Vous cherchez encore ?"
              subtitle="Notre équipe vous accompagne pour trouver un bien adapté à votre budget et votre quartier préféré."
            />
            <div className="faq-points">
              <div>
                <strong>Recherche rapide</strong>
                <p>Filtrez par ville, quartier, budget et type de bien.</p>
              </div>
              <div>
                <strong>Biens vérifiés</strong>
                <p>Nous priorisons les annonces claires et utiles.</p>
              </div>
            </div>
          </div>
          <div className="faq-image-wrap">
            <img src={faqImage} alt="Recherche immobilière" />
          </div>
        </div>
      </section>
    </main>
  );
}
