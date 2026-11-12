import { Employee } from '@/data/employees';
import LogosImg from "@/assets/images/logos";

import './Card.scss';

const EmployeeCard = ({
  avatarImage,
  name,
  header,
  stage,
  role,
}: Omit<Employee, 'id'>) => {
  const stageImg = LogosImg[stage as keyof typeof LogosImg];
  return (
    <li className="card">
      <div
        className="card__header"
        style={{
          backgroundImage: `url(/images/avatars/${avatarImage}.webp)`,
        }}
      />

      <div className="card__body">
        <h3 className="card__name">{name}</h3>

        {header.map((item: string) => (
          <p className="card__bio" key={item}>
            {item}
          </p>
        ))}

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
