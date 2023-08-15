import mainApiClass from "./MainApi";
import moviesApiClass from "./MoviesApi";
import authApiClass from "./AuthApi";

import { moviesApiConfig, mainApiConfig, authApiConfig } from "../configs/api";

export const mainApi = new mainApiClass(mainApiConfig);
export const moviesApi = new moviesApiClass(moviesApiConfig);
export const authApi = new authApiClass(authApiConfig);
