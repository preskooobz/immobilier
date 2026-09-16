import './SectionTitle.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="section-title-main">{title}</h2>
      {subtitle && <p className="section-title-sub">{subtitle}</p>}
    </div>
  );
}
