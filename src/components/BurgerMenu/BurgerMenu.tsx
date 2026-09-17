import "./BurgerMenu.scss";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

export const BurgerMenu = ({ isOpen, onToggle }: Props) => (
  <button
    className={`burger ${isOpen ? "_active" : ""}`}
    onClick={onToggle}
    aria-label="Menu"
  >
    <span className="burger__line" />
    <span className="burger__line" />
    <span className="burger__line" />
  </button>
);
