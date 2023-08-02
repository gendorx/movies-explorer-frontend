import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isSavedFilms }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList isSavedFilms={isSavedFilms} />
    </main>
  );
}

export default Movies;
