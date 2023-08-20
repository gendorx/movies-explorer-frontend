import Api from "./Api";

class MainApi extends Api {
  // Movies
  getSavedMovies() {
    return this.sendRequest("/movies");
  }

  addSavedMovie(data) {
    return this.sendRequest("/movies", { method: "POST", body: JSON.stringify(data) });
  }

  deleteFavoriteMovie(id) {
    return this.sendRequest(`/movies/${id}`, { method: "DELETE" });
  }

  // User
  getCurrentUser() {
    return this.sendRequest("/users/me");
  }

  updateProfileUser(body) {
    return this.sendRequest("/users/me", { method: "PATCH", body: JSON.stringify(body) });
  }

  sendRequest(path, opts = {}) {
    return super.sendRequest(path, {
      ...opts,
      headers: {
        authorization: `Bearer ${this._getToken()}`,
        ...this._headers,
      },
    });
  }

  _getToken() {
    return localStorage.getItem("jwt");
  }
}

export default MainApi;
