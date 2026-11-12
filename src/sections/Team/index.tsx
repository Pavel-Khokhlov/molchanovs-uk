import employees from '@/data/employees';
import EmployeeCard from '@/components/EmployeeCard';

import './Team.scss';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team__head">
        <h2 className="team__title">The Molchanovs team</h2>
        <p className="team__subtitle">
          Pool and depth courses for adults and children. Training in London,
          Dahab, Kas, the Maldives, and Cuba.
        </p>
      </div>
      <ul className="team__list">
        {employees.map(({ id, ...rest }) => (
          <EmployeeCard key={id} {...rest} />
        ))}
      </ul>
    </section>
  );
};

export default Team;
