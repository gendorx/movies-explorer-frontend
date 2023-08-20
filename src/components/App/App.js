import "./App.css";

// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import currentUserContext from "../../contexts/currentUserContext";
import {
  mainApi,
  moviesApi,
  authApi,
} from "../../utils/constants";
import { NetworkErrorMessage } from "../../configs/common";
import ApiError from "../../utils/errros/ApiError";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const displayHeaders = ["/", "/movies", "/saved-movies", "/profile"];
const displayFooter = ["/", "/movies", "/saved-movies"];

function App() {
  const [isLogged, setLogged] = useState(!!localStorage.getItem("jwt"));
  const [isBurgerOpened, setOpenedBurger] = useState(false);
  const [isLoadPage, setLoadPage] = useState(false);
  const [isLoaderOpened, setLoaderOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [dataInfoTooltip, setDataInfoTooltip] = useState({
    isOpen: false,
    text: "",
    isSuccess: false,
  });
  const [listMovies, setListMovies] = useState([]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleBurgerClick = () => {
    setOpenedBurger(!isBurgerOpened);
  };

  const closeMenu = () => {
    setOpenedBurger(false);
  };

  const showErrorTooltip = (message) => {
    setDataInfoTooltip({
      isOpen: true,
      isSuccess: false,
      text: message,
    });
  };

  const showSuccessTooltip = (message) => {
    setDataInfoTooltip({
      isOpen: true,
      isSuccess: true,
      text: message,
    });
  };

  const closeDataInfoTooltip = () => {
    setDataInfoTooltip({
      ...dataInfoTooltip,
      isOpen: false,
    });
  };

  const handleApiError = useCallback((err) => {
    return showErrorTooltip(
      err instanceof ApiError ? err.message : NetworkErrorMessage
    );
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      closeMenu();
    }
  }, [pathname]);

  async function getFavoriteMovies() {
    setLoaderOpened(true);
    try {
      const favoriteMovies = await mainApi.getFavoriteMovies();

      setListMovies(favoriteMovies);
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoaderOpened(false);
    }
  }

  async function getAllMovies() {
    setLoaderOpened(true);
    try {
      const allMovies = await moviesApi.getAllMovies();

      setListMovies(allMovies);
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoaderOpened(false);
    }
  }

  async function loginUser({ email, password }) {
    setLoaderOpened(true);

    try {
      const { token } = await authApi.loginUser({ email, password });

      localStorage.setItem("jwt", token);

      setLogged(true);
      navigate("/movies");
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoaderOpened(false);
    }
  }

  async function registerUser({ name, email, password }) {
    setLoaderOpened(true);

    try {
      const user = await authApi.registerUser({ name, email, password });

      if (!user._id) return;

      await loginUser({ email, password });
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoaderOpened(false);
    }
  }

  async function editProfile({ name, email }) {
    setLoaderOpened(true);

    try {
      await mainApi.updateProfileUser({ name, email });

      showSuccessTooltip("Профиль успешно обновлён!");
      setCurrentUser({
        ...currentUser,
        email,
        name,
      });
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoaderOpened(false);
    }
  }

  const signOut = useCallback(() => {
    setLogged(false);
    setCurrentUser({});

    localStorage.clear();
  }, []);

  useEffect(() => {
    if (!isLogged) return;

    const checkToken = async () => {
      const jwt = localStorage.getItem("jwt");

      if (!jwt) return;

      setLoadPage(true);
      try {
        const userInfo = await mainApi.getCurrentUser();

        setLogged(true);
        setCurrentUser(userInfo);
      } catch (err) {
        signOut();
        handleApiError(err);
      } finally {
        setLoadPage(false);
      }
    };

    checkToken();
  }, [isLogged, signOut, handleApiError]);

  return (
    <div className="app">
      {isLoadPage ? (
        <Preloader />
      ) : (
        <currentUserContext.Provider value={currentUser}>
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
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  isLogged={!isLogged}
                  component={Register}
                  onSubmit={registerUser}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRoute
                  isLogged={!isLogged}
                  component={Login}
                  onSubmit={loginUser}
                />
              }
            />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  getMovies={getAllMovies}
                  component={Movies}
                  listMovies={listMovies}
                  setLoaderOpened={setLoaderOpened}
                  handleApiError={handleApiError}
                  showErrorTooltip={showErrorTooltip}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  component={Movies}
                  isSavedMovies={true}
                  listMovies={listMovies}
                  setLoaderOpened={setLoaderOpened}
                  handleApiError={handleApiError}
                  showErrorTooltip={showErrorTooltip}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  getMovies={getFavoriteMovies}
                  component={Profile}
                  onSubmit={editProfile}
                  signOut={signOut}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

          {displayFooter.some((a) => a === pathname) && <Footer />}
          <InfoTooltip {...dataInfoTooltip} onClose={closeDataInfoTooltip} />
          {isLoaderOpened && <Preloader />}
        </currentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
