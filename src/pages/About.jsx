import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { stats } from '../data/mockData';
import './About.css';
import heroImage from '../assets/faqImage.jpg';

export default function About() {
  return (
    <main className="about-page">
      <Hero
        eyebrow="À propos de notre plateforme"
        title="Une nouvelle façon de trouver votre logement."
        subtitle="Immobilier simplifie votre recherche avec une plateforme moderne et intuitive."
        backgroundImage={heroImage}
      />

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-part">
              <h2>Qui sommes-nous ?</h2>
              <p>
                Immobilier est une plateforme immobilière moderne qui révolutionne la façon dont les gens cherchent, trouvent et achètent des propriétés au Sénégal. Fondée par des passionnés du secteur immobilier, nous mettons l'accent sur la transparence, la sécurité et la facilité d'utilisation.
              </p>
            </div>

            <div className="about-part">
              <h2>Notre mission</h2>
              <p>
                Notre mission est de simplifier la recherche immobilière en offrant une plateforme intuitive, sécurisée et fiable. Nous voulons mettre en relation les acheteurs, les vendeurs et les agents immobiliers de manière efficace et transparente.
              </p>
            </div>

            <div className="about-part">
              <h2>Notre vision</h2>
              <p>
                Devenir la plateforme immobilière de référence en Afrique de l'Ouest, en offrant une expérience utilisateur exceptionnelle et en favorisant la croissance du secteur immobilier.
              </p>
            </div>

            <div className="about-part">
              <h2>Nos valeurs</h2>
              <ul className="values-list">
                <li><strong>Transparence:</strong> Nous croyons en la clarté et l'honnêteté dans tous les échanges.</li>
                <li><strong>Sécurité:</strong> La protection de vos données et de vos transactions est notre priorité.</li>
                <li><strong>Innovation:</strong> Nous continuellemnt améliorons notre plateforme pour mieux vous servir.</li>
                <li><strong>Excellence:</strong> Nous visons l'excellence dans chaque aspect de notre service.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <SectionTitle
            title="Nos chiffres"
            subtitle="Des chiffres qui parlent d'eux-mêmes"
          />

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
