import './Hero.css';

export default function Hero({ title, subtitle, showButtons, buttons, backgroundImage, eyebrow }) {
  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.78), rgba(37, 99, 235, 0.72)), url(${backgroundImage})`,
      }
    : undefined;

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-shell">
        <div className="hero-copy">
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {showButtons && buttons && (
            <div className="hero-buttons">
              {buttons.map((btn, idx) => (
                <button key={idx} className={`hero-btn ${btn.variant || 'primary'}`}>
                  {btn.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
