import { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';
import contactImage from '../assets/contactImage.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Merci pour votre message! Nous vous recontacterons bientôt.');
  };

  return (
    <main className="contact-page">
      <Hero
        eyebrow="Parlez-nous de votre projet"
        title="Nous contacter"
        subtitle="Vous avez des questions ? Nous sommes là pour vous aider."
        backgroundImage={contactImage}
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <SectionTitle
                title="Nos coordonnées"
                subtitle="N'hésitez pas à nous contacter de n'importe quelle manière"
              />

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-text">
                    <h3>Téléphone</h3>
                    <p><a href="tel:+221765432100">+221 76 543 21 00</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p><a href="mailto:contact@immobilier.sn">contact@immobilier.sn</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-text">
                    <h3>Adresse</h3>
                    <p>Rue 01, Almadies<br />Dakar, Sénégal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <SectionTitle title="Formulaire de contact" />

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
