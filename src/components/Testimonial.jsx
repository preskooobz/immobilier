import './Testimonial.css';

export default function Testimonial({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <h4 className="testimonial-name">{testimonial.name}</h4>
        <div className="testimonial-rating">
          {'⭐'.repeat(testimonial.rating)}
        </div>
        <p className="testimonial-text">{testimonial.text}</p>
      </div>
    </div>
  );
}
