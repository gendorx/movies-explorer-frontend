import { durationShortMovies } from "../configs/common";

export function convertDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч ${minutes}м`;
}

export function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration < durationShortMovies);
}

export function findByQueryMovies(moviesList, query, isShortMovies) {
  query = query.toLowerCase();
  console.log(moviesList, query, isShortMovies);

  let filteredMovies = moviesList.filter((movie) => {
    const names = [movie.nameRU.toLowerCase(), movie.nameEN.toLowerCase()];
    return names.some((name) => name.indexOf(query) > -1);
  });

  if (isShortMovies) {
    filteredMovies = filterShortMovies(filteredMovies);
  }

  return filteredMovies;
}

export function transformMovies(movies) {
  movies.forEach((movie) => {
    movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    movie.image = `https://api.nomoreparties.co${movie.image.url}`;
  });
  return movies;
}
