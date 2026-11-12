import { Employee } from '@/data/employees';

import './Card.scss';

const EmployeeCard = ({
  avatarImage,
  name,
  header,
  stage,
  role,
}: Omit<Employee, 'id'>) => {
  const stageImg = `./src/assets/images/logos/${stage}.webp`;
  return (
    <li className="card">
      <div
        className="card__header"
        style={{
          backgroundImage: `url(/src/assets/images/${avatarImage}.webp)`,
        }}
      />

      <div className="card__body">
        <h3 className="card__name">{name}</h3>

        {/* <Socials variant="_card" /> */}

        {header.map((item: string) => (
          <p className="card__bio" key={item}>
            {item}
          </p>
        ))}

        {/* {stage.map((item: string) => (
          <p className="card__bio" key={item}>
            {item}
          </p>
        ))} */}

        <img src={stageImg} alt="icon stage" className="card__stage" />

        {role.map((item: string) => (
          <p className="card__role" key={item}>
            {item}
          </p>
        ))}
      </div>
    </li>
  );
};

export default EmployeeCard;
