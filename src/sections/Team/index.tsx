import Socials from '@/components/Social';

import './Team.scss';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team__head">
        <h2 className="team__title">
          Freediving Instructors Molchanovs &amp; AIDA Certified
        </h2>
        <p className="team__subtitle">
          Pool and depth courses for adults and children. Training in London,
          Dahab, Kas, the Maldives, and Cuba.
        </p>
      </div>
      <div className="employee-card">
        <div className="employee-card__header">
          {/* <div className="employee-card__avatar">
            <img src={OxanaImg} alt="Photo Oxana Molchanova" />
          </div> */}
        </div>

        <div className="employee-card__body">
          <h3 className="employee-card__name">Oxana Molchanova</h3>

          <Socials variant='_card'/>

          <p className="employee-card__bio">Freediving Instructors for:</p>
          <p className="employee-card__bio margin">
            Adults and Children (5–18)
          </p>

          <p className="employee-card__bio">Certified Freediving Instructor</p>
          <p className="employee-card__bio margin">L1–L3 · W1–W3 · JLI</p>

          <p className="employee-card__role">Instructor at the</p>
          <p className="employee-card__role">N. Molchanova Freediving School</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
