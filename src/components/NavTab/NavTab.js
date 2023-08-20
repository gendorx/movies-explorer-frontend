import "./NavTab.css";


function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__nav-list">
        <li className="navtab__nav-item">
          <a href="#section-about-project" className="navtab__nav-link">
            О проекте
          </a>
        </li>

        <li className="navtab__nav-item">
          <a href="#section-techs" className="navtab__nav-link">
            Технологии
          </a>
        </li>

        <li className="navtab__nav-item">
          <a href="#section-about-me" className="navtab__nav-link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
