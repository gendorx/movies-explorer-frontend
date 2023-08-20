import "./Header.css";

import Navigation from "../Navigation/Navigation";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

import headerLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header({ loggedIn, isBurgerOpened, onClickBurger, closeMenu }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={headerLogo} alt="Логотип шапки" />
        </Link>

        {isMobile && loggedIn && <HamburgerButton onClick={onClickBurger} />}
        <Navigation loggedIn={loggedIn} isBurgerOpened={isBurgerOpened} closeMenu={closeMenu} />
      </div>
    </header>
  );
}

export default Header;
