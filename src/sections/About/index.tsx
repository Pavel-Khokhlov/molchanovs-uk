import socials from '@/assets/images/features';
import './About.scss';

// Иконки можно заменить на ваши SVG или компоненты
const features = [
  {
    id: 1,
    eyebrow: 'Health',
    title: 'Love it. Breathe it.',
    text: 'Freediving increases vital lung capacity and strengthens the respiratory muscles.',
    image: 'breath',
    icon: '→',
  },
  {
    id: 2,
    eyebrow: 'Anti-Stress',
    title: 'Reset your mind.',
    text: 'The body resets, and even after the hardest day, the desire to live returns.',
    image: 'brain',
    icon: '+',
  },
  {
    id: 3,
    eyebrow: 'Fitness',
    title: 'Train without the strain.',
    text: 'As effective as active fitness training — but softer and safer for the body.',
    image: 'fitness',
    icon: '+',
  },
  {
    id: 4,
    eyebrow: 'Endurance',
    title: 'Built for more.',
    text: 'An organism adapted to low oxygen and high CO₂ handles everyday loads with ease.',
    image: 'endurance',
    icon: '→',
  },
  {
    id: 5,
    eyebrow: 'Hardening',
    title: 'Comfort in the cold.',
    text: 'Regular swimming and diving harden the body gently — no ice baths required.',
    image: 'hardening',
    icon: '+',
  },
  {
    id: 6,
    eyebrow: 'Meditation',
    title: 'Just you and the water.',
    text: 'A rare chance to be alone with yourself in our information-overloaded world.',
    image: 'meditation',
    icon: '→',
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      {/* Декоративный элемент для связи со слайдером */}
      <div className="about__wave-top"></div>

      <div className="container">
        <div className="about__header">
          <h2 className="about__title">
            WHY DO WE <br /> FREEDIVE?
          </h2>
          <span className="about__subtitle">
            <strong className="about__subtitle-strong">
              FREEDIVING IS AN OPPORTUNITY.
            </strong>{' '}
            AN OPPORTUNITY TO PEEK BEYOND THE LIMITS. TO BECOME AWARE OF YOUR
            BODY,{' '}
            <strong className="about__subtitle-strong">
              LEARN TO CALM THE MIND
            </strong>
            , STOP THE FLOW OF THOUGHTS, AND TRUST THE WISDOM OF{' '}
            <strong className="about__subtitle-strong">NATURE</strong>.
          </span>
        </div>

        <div className="about__grid">
          {features.map((item) => (
            <div key={item.id} className="feature-card">
              <div className="feature-card__eyebrow">{item.eyebrow}</div>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__text">{item.text}</p>
              <div className="feature-card__image">
                <img src={socials[item.image]} alt={item.title} />
              </div>
              {/* <div className="feature-card__cta">
                {item.id === 1 ? '→' : '+'}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
