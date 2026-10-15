import { useUIStore } from '../../store/useUIStore';
import { Logo } from '../../elements/Logo/Logo';
import BurgerMenu from '@/components/BurgerMenu';
import Navigation from '@/components/Navigation';

import './Header.scss';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useUIStore();

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Navigation variant="_desktop" />
        <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>

      <div className={`header__mobile ${isMenuOpen && '_open'}`}>
        <Navigation variant="_mobile" onLinkClick={toggleMenu} />
        <span className="header__version">
          Version: <span>{import.meta.env.VITE_APP_VERSION}</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
