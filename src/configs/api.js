import { isProduction, moviesBaseUrl } from "./common";

export const mainApiConfig = {
  baseUrl: isProduction
    ? "https://api.gendorx-frontend.nomoredomains.monster"
    : "http://192.168.0.178:3001",
  headers: {
    "Content-Type": "application/json",
  },
};

export const moviesApiConfig = {
  baseUrl: moviesBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
};

export const authApiConfig = {
  baseUrl: isProduction
    ? "https://api.gendorx-frontend.nomoredomains.monster"
    : "http://192.168.0.178:3001",
  headers: {
    "Content-Type": "application/json",
  },
};
