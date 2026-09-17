import { useUIStore } from '../../store/useUIStore';
import { Logo } from '../../elements/Logo/Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

import './Header.scss';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Pool', href: '#pool' },
  { label: 'Trips', href: '#trips' },
  { label: 'Contacts', href: '#contact' },
];

export const Header = () => {
  const { isMenuOpen, toggleMenu } = useUIStore();

  return (
    <header className={`header ${isMenuOpen ? 'header--open' : ''}`}>
      <div className="header__inner">
        <Logo />

        <nav className="header__nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="header__link">
              {l.label}
            </a>
          ))}
        </nav>

        <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>

      <div
        className={`header__mobile ${isMenuOpen ? 'header__mobile--open' : ''}`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="header__mobile-link"
            onClick={toggleMenu}
          >
            {l.label}
          </a>
        ))}
        <span className="header__version">
          Version: <span>{import.meta.env.VITE_APP_VERSION}</span>
        </span>
      </div>
    </header>
  );
};
