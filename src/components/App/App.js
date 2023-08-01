import "./App.css";

// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const displayHeaders = ["/", "/movies", "/saved-movies", "/profile"];
const authHeaders = ["/movies", "/saved-movies", "/profile"];
const displayFooter = ["/", "/movies", "/saved-movies"];

function App() {
  const [isLogged, setLogged] = useState(true);
  const [isBurgerOpened, setOpenedBurger] = useState(false);
  const { pathname } = useLocation();

  const toggleBurgerClick = () => {
    setOpenedBurger(!isBurgerOpened);
  };

  const closeMenu = () => {
    setOpenedBurger(false);
  }

  /** Временное решение: убрать стейт авторизирован ли пользователь при переходе на страницы */

  useEffect(
    () => setLogged(authHeaders.some((a) => a === pathname)),
    [pathname]
  );

  return (
    <div className="app">
      {displayHeaders.some((a) => a === pathname) && (
        <Header
          loggedIn={isLogged}
          isBurgerOpened={isBurgerOpened}
          onClickBurger={toggleBurgerClick}
          closeMenu={closeMenu}
        />
      )}

      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<Movies isSavedFilms={true} />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {displayFooter.some((a) => a === pathname) && <Footer />}
    </div>
  );
}

export default App;
