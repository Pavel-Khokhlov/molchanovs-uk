import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}

export const Button = ({
  children,
  href,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
