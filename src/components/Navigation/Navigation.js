import "./Navigation.css";

import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Navigation({ loggedIn, isBurgerOpened, closeMenu }) {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <nav
      className={`navigation ${
        isMobile
          ? isBurgerOpened
            ? "navigation_popup_opened"
            : "navigation_popup_closed"
          : ""
      }`}
    >
      {loggedIn && (
        <div className="navigation__container">
          <div className="navigation__supportive">
            {isMobile && (
              <button
                className="navigation__btn-popup-close"
                onClick={closeMenu}
              ></button>
            )}

            <ul className="navigation__list">
              {isMobile && (
                <li className="navigation__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `navigation__link ${
                        isActive && "navigation__link_active"
                      }`
                    }
                  >
                    Главная
                  </NavLink>
                </li>
              )}

              <li className="navigation__item">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `navigation__link ${isActive && "navigation__link_active"}`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `navigation__link ${isActive && "navigation__link_active"}`
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>

          <Link
            to="/profile"
            className="navigation__link navigation__link_type_account"
          >
            Аккаунт
          </Link>
        </div>
      )}

      {!loggedIn && (
        <ul className="navigation__auth">
          <li className="navigation__auth-item">
            <Link to="/signup" className="navigation__link">
              Регистрация
            </Link>
          </li>
          <li className="navigation__auth-item">
            <Link
              to="/signin"
              className="navigation__link navigation__link_green"
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
