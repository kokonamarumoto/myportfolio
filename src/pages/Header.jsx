import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">My Portfolio</h1>
      <nav>
        <ul className="header__nav">
          <li className="tag"><a href="#profile">Profile</a></li>
          <li className="tag"><a href="#skills">Skills</a></li>
          <li className="tag"><a href="#projects">Projects</a></li>
          <li className="tag"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
