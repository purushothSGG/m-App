import "./Header.css";

type HeaderProps = {
  title: string;
  links?: { name: string; href: string }[]; // optional navigation links
};

export default function Header({ title, links = [] }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__logo">{title}</div>

      <nav className="header__nav">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="header__link">
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
