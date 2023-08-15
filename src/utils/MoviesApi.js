import Api from "./Api";

class MoviesApi extends Api {
  getAllMovies() {
    return this.sendRequest("/beatfilm-movies");
  }
}

export default MoviesApi;
