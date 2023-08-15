export const isProduction = process.env.NODE_ENV === "production";
export const moviesBaseUrl = "https://api.nomoreparties.co";
export const durationShortMovies = 40;
export const deviceParamsMovies = {
  desktop: {
    width: 1280,
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
    minWidth: 320,
    maxWidth: 480,
    displayMovies: {
      total: 12,
      more: 3,
    },
  },
};

export const NetworkErrorMessage =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
