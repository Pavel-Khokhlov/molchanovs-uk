import LogoIcon from "../LogoIcon";

import "./Logo.scss";

export const Logo = () => (
  <a href="/" className="logo">
    <LogoIcon size={30}/>
    <span className="logo__text">
      MOLCHANOVS
    </span>
  </a>
);
