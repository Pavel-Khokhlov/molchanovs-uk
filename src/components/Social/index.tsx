import socialsIcon from '@/assets/images/social';

import './Socials.scss';

type SocialsProps = {
  variant: '_card' | '_mobile' | '_footer';
  onLinkClick?: () => void;
};

const socials = [
  {
    name: 'Instagram',
    title: '@instagram',
    url: 'https://instagram.com/user',
    icon: 'instagram',
    iconW: 'instagramW',
  },
  {
    name: 'Telegram',
    title: '@SannaOksanna',
    url: 'https://t.me/@SannaOksanna',
    icon: 'telegram',
    iconW: 'telegramW',
  },
  {
    name: 'Email',
    title: 'E-mail',
    url: 'mailto:mail@example.com',
    icon: 'gmail',
    iconW: 'gmailW',
  },
];

const Socials = ({ variant }: SocialsProps) => {
  return (
    <ul className={`socials__list ${variant}`}>
      {socials.map(({ name, title, url, icon, iconW }) => (
        <li key={name} className="socials__item">
          <a
            href={url}
            className="socials__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <img
              src={socialsIcon[variant === '_card' ? icon : iconW]}
              alt={`icon ${icon}`}
              className={`socials__icon ${variant}`}
            />
            {variant !== '_card' && (
              <p className={`socials__name ${variant}`}>{title}</p>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
