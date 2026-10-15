import LogoIcon from '@/elements/LogoIcon';
import Navigation from '@/components/Navigation';

import './Footer.scss';
import Socials from '@/components/Social';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2004;

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <LogoIcon size={60} />
          <span className="footer__name">Molchanovs Freediving</span>
          <span className="footer__location">London</span>
        </div>
        <div className="footer__block">
          <p className="footer__title">Navigation:</p>
          <Navigation variant="_footer" />
        </div>
        <div className="footer__block">
            <p className="footer__title">Contacts:</p>
            <Socials variant={'_footer'} />
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__meta">
          {startYear} – {currentYear} All rights reserved
        </span>
        <span className="footer__meta">
          Version: <span>{import.meta.env.VITE_APP_VERSION}</span>
        </span>
      </div>
    </footer>
  );
}
