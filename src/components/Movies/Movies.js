import { Component } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { moviesApi, mainApi } from "../../utils/constants";
import { findByQueryMovies, transformMovies } from "../../utils/utils";

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
      isShortMovies: false,
      query: "",
    };

    bindMethodsNames.forEach((methodName) => {
      this[methodName] = this[methodName].bind(this);
    });
  }

  componentDidMount() {
    const newStateMovies = this.getNewStateMovies();
    this.setNewState(newStateMovies);
    this.getMovies().then(({ allMovies, savedMovies }) => {
      const moviesList = this.props.isSavedMovies ? savedMovies : allMovies;

      this.setNewState({
        allMovies,
        savedMovies,
        outputMovies: this.getOutputMovies(
          moviesList,
          newStateMovies.query,
          newStateMovies.isShortMovies
        ),
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isSavedMovies !== this.props.isSavedMovies) {
      const moviesList = this.getByPathMovies();
      const newStateMovies = this.getNewStateMovies();
      this.setNewState({
        outputMovies: this.getOutputMovies(
          moviesList,
          newStateMovies.query,
          newStateMovies.isShortMovies
        ),
        ...newStateMovies,
      });
    }
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

  getByPathMovies() {
    return this.props.isSavedMovies
      ? this.state.savedMovies
      : this.state.allMovies;
  }

  getNewStateMovies() {
    const { isSavedMovies } = this.props;

    const queryUser = localStorage.getItem("query");
    const isShortMovies = localStorage.getItem("isShortMovies");

    return {
      query: isSavedMovies ? "" : queryUser || "",
      isShortMovies: isSavedMovies ? false : isShortMovies === "true",
    };
  }

  getOutputMovies(moviesList, query, isShortFilms) {
    const { showErrorTooltip } = this.props;

    const listMovies = findByQueryMovies(
      moviesList,
      typeof query === "undefined" ? this.state.query : query,
      typeof isShortFilms === "undefined"
        ? this.state.isShortMovies
        : isShortFilms
    );

    if (!listMovies.length) {
      showErrorTooltip("Ничего не найдено.");
    }

    return listMovies;
  }

  handleChangeFilterCheckbox() {
    const { isSavedMovies } = this.props;

    this.setNewState({
      isShortMovies: !this.state.isShortMovies,
      outputMovies: this.getOutputMovies(
        this.getByPathMovies(),
        this.state.query,
        !this.state.isShortMovies
      ),
    });

    if (!isSavedMovies)
      localStorage.setItem("isShortMovies", !this.state.isShortMovies);
  }

  handleChangeInputQuery(e) {
    this.setNewState({
      query: e.target.value,
    });
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
    const { setLoaderOpened, handleApiError, isSavedMovies } = this.props;

    const savedMovie = this.state.savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );

    setLoaderOpened(true);

    const filterMovies = (item) =>
      movie.id === item.movieId || movie.movieId === item.movieId
        ? false
        : true;

    mainApi
      .deleteFavoriteMovie(savedMovie._id)
      .then(() => {
        const moviesList = this.state.savedMovies.filter(filterMovies);
        this.setNewState({
          savedMovies: moviesList,
          ...(isSavedMovies
            ? { outputMovies: this.state.outputMovies.filter(filterMovies) }
            : {}),
        });

        localStorage.setItem("savedMovies", JSON.stringify(moviesList));
      })
      .catch((err) => handleApiError(err))
      .finally(() => setLoaderOpened(false));
  }

  handleSubmitSearch() {
    const { isSavedMovies } = this.props;

    this.setNewState({
      outputMovies: this.getOutputMovies(this.getByPathMovies()),
    });

    if (!isSavedMovies) {
      localStorage.setItem("query", this.state.query);
      localStorage.setItem("isShortMovies", this.state.isShortMovies);
    }
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
        {!!state.outputMovies.length && (
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
