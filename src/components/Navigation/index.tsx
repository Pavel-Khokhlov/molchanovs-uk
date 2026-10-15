import './Navigation.scss';

const NAV_LINKS = [
  { label: 'Main', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  /* { label: 'Pool', href: '#pool' }, */
  /* { label: 'Trips', href: '#trips' }, */
  { label: 'Contacts', href: '#contact' },
];

type NavigationProps = {
  variant: '_desktop' | '_mobile' | '_footer';
  onLinkClick?: () => void;
};

const Navigation = ({ variant, onLinkClick }: NavigationProps) => {
  const className = 'nav ' + variant;
  const linkClassName = 'nav__link ' + variant;

  return (
    <nav className={className}>
      {NAV_LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
