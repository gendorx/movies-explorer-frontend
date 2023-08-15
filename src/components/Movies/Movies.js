import { Component } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { moviesApi, mainApi } from "../../utils/constants";
import {
  filterShortMovies,
  findByQueryMovies,
  transformMovies,
} from "../../utils/utils";

const bindMethodsNames = [
  "handleChangeFilterCheckbox",
  "handleSubmitSearch",
  "handleLikeButton",
  "handleDeleteButton",
  "handleChangeInputQuery",
];

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      savedMovies: [],
      outputMovies: [],
      isNotFound: false,
      isShortMovies: false,
      query: "",
    };

    bindMethodsNames.forEach((methodName) => {
      this[methodName] = this[methodName].bind(this);
    });
  }

  componentDidMount() {
    const isShortFilmsFromStorage = localStorage.getItem("isShortMovies");
    const queryUser = localStorage.getItem("query");

    if (!isShortFilmsFromStorage) {
      localStorage.setItem("isShortMovies", false);
    }

    this.setNewState({
      isShortMovies: isShortFilmsFromStorage === "true" ? true : false,
      isSavedMovies: window.location.pathname === "/saved-movies",
      query: queryUser || "",
    });

    this.getMovies().then(({ allMovies, savedMovies }) => {
      const moviesList = this.props.isSavedMovies ? savedMovies : allMovies;

      this.setNewState({
        allMovies,
        savedMovies,
        outputMovies: this.state.isShortMovies
          ? filterShortMovies(moviesList)
          : moviesList,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isShortMovies !== this.state.isShortMovies) {
      this.setNewState({
        outputMovies: findByQueryMovies(
          this.getByPathMovies(),
          this.state.query,
          this.state.isShortMovies
        ),
      });
    }

    if (prevProps.isSavedMovies !== this.props.isSavedMovies) {
      const moviesList = this.getByPathMovies();
      this.setNewState({
        outputMovies: this.state.isShortMovies
          ? filterShortMovies(moviesList)
          : moviesList,
      });
    }
  }

  async getMovies() {
    const { handleApiError, setLoaderOpened } = this.props;

    setLoaderOpened(true);

    try {
      const [allMovies, savedMovies] = await Promise.all([
        this.getDataFromStorageOrServer(
          "allMovies",
          moviesApi.getAllMovies.bind(moviesApi)
        ),
        this.getDataFromStorageOrServer(
          "savedMovies",
          mainApi.getSavedMovies.bind(mainApi)
        ),
      ]);

      return { allMovies: transformMovies(allMovies), savedMovies };
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoaderOpened(false);
    }
  }

  setNewState(newState) {
    this.setState({ ...this.state, ...newState });
  }

  async getDataFromStorageOrServer(localKey, fn) {
    let moviesList = localStorage.getItem(localKey);

    if (!moviesList) {
      moviesList = await fn();
      localStorage.setItem(localKey, JSON.stringify(moviesList));
    }

    return typeof moviesList === "string"
      ? JSON.parse(moviesList) || []
      : moviesList;
  }

  handleChangeFilterCheckbox() {
    this.setNewState({
      isShortMovies: !this.state.isShortMovies,
    });
    localStorage.setItem("isShortMovies", !this.state.isShortMovies);
  }

  handleChangeInputQuery(e) {
    this.setNewState({
      query: e.target.value,
    });

    localStorage.setItem("query", e.target.value);
  }

  handleLikeButton(movie) {
    const { setLoaderOpened, handleApiError } = this.props;

    setLoaderOpened(true);

    mainApi
      .addSavedMovie({
        ...movie,
        movieId: movie.id,
        id: undefined,
        created_at: undefined,
        updated_at: undefined,
      })
      .then((newMovie) => {
        const moviesList = [newMovie, ...this.state.savedMovies];

        this.setNewState({
          savedMovies: moviesList,
        });
        localStorage.setItem("savedMovies", JSON.stringify(moviesList));
      })
      .catch((err) => handleApiError(err))
      .finally(() => setLoaderOpened(false));
  }

  handleDeleteButton(movie) {
    const { setLoaderOpened, handleApiError } = this.props;

    const savedMovie = this.state.savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );

    setLoaderOpened(true);

    mainApi
      .deleteFavoriteMovie(savedMovie._id)
      .then(() => {
        const moviesList = this.state.savedMovies.filter((item) =>
          movie.id === item.movieId || movie.movieId === item.movieId
            ? false
            : true
        );
        this.setNewState({
          savedMovies: moviesList,
        });

        localStorage.setItem("savedMovies", JSON.stringify(moviesList));
      })
      .catch((err) => handleApiError(err))
      .finally(() => setLoaderOpened(false));
  }

  getByPathMovies() {
    return this.props.isSavedMovies
      ? this.state.savedMovies
      : this.state.allMovies;
  }

  handleSubmitSearch({ query }) {
    this.setNewState({
      outputMovies: findByQueryMovies(
        this.getByPathMovies(),
        this.state.query,
        this.state.isShortMovies
      ),
    });
  }

  render() {
    const { state, props } = this;

    return (
      <main className="movies">
        <SearchForm
          onSubmit={this.handleSubmitSearch}
          isShortMovies={this.state.isShortMovies}
          onChangeFilterCheckbox={this.handleChangeFilterCheckbox}
          onChangeInputQuery={this.handleChangeInputQuery}
          query={this.state.query}
        />
        {!state.isNotFound && (
          <MoviesCardList
            isSavedMovies={props.isSavedMovies}
            listMovies={state.outputMovies}
            savedMovies={state.savedMovies}
            onLikeClick={this.handleLikeButton}
            onDeleteClick={this.handleDeleteButton}
          />
        )}
      </main>
    );
  }
}

export default Movies;
