import mainApiClass from "./MainApi";
import moviesApiClass from "./MoviesApi";
import authApiClass from "./AuthApi";

import { moviesApiConfig, mainApiConfig, authApiConfig } from "../configs/api";

export const mainApi = new mainApiClass(mainApiConfig);
export const moviesApi = new moviesApiClass(moviesApiConfig);
export const authApi = new authApiClass(authApiConfig);

export const durationShortMovies = 40;

export const devicesParamsMovies = {
  desktop: {
    minWidth: 1280,
    maxWidth: Infinity,
    displayMovies: {
      total: 12,
      more: 3,
    },
  },

  tablet: {
    minWidth: 768,
    maxWidth: 1279,
    displayMovies: {
      total: 8,
      more: 2,
    },
  },

  mobile: {
    minWidth: 50,
    maxWidth: 767,
    displayMovies: {
      total: 5,
      more: 2,
    },
  },
};
