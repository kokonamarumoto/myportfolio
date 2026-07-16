import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__title">Engineer Book</h1>
      <h1 className="sidebar-subtitle">-Portfolio-</h1>

      <nav>
        <ul className="sidebar__nav">
          <li><NavLink to="/">Top</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">GitHub</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
