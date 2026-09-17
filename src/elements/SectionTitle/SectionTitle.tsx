import "./SectionTitle";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ eyebrow, title, subtitle }: Props) => (
  <div className="section-title">
    {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
    <h2 className="section-title__title">{title}</h2>
    {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
  </div>
);
