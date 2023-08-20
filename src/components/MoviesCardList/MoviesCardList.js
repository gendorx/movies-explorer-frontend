import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

import { devicesParamsMovies } from "../../utils/constants";

function MoviesCardList({
  isSavedMovies,
  listMovies,
  savedMovies,
  onLikeClick,
  onDeleteClick,
}) {
  const screenWidth = useScreenWidth();
  const [outputMoviesList, setOutputMoviesList] = useState([]);
  const [deviceParams, setDeviceParams] = useState({});

  useEffect(() => {
    if (isSavedMovies) return setOutputMoviesList(listMovies);

    for (const deviceName in devicesParamsMovies) {
      const device = devicesParamsMovies[deviceName];
      if (device.minWidth <= screenWidth && device.maxWidth >= screenWidth) {
        setDeviceParams(device);
        setOutputMoviesList(
          listMovies.filter((_, i) => i < device.displayMovies.total)
        );
      }
    }
  }, [screenWidth, listMovies, isSavedMovies]);

  const handleMoreButtonClick = () => {
    const end = outputMoviesList.length + deviceParams.displayMovies.more;

    if (listMovies.length - outputMoviesList.length <= 0) return;

    setOutputMoviesList([
      ...outputMoviesList,
      ...listMovies.slice(outputMoviesList.length, end),
    ]);
  };

  const isSavedFilm = (id) => {
    return savedMovies.some((savedMovie) => savedMovie.movieId === id);
  };

  return (
    <section
      className={`movies-cards ${isSavedMovies && "movies-cards_saved"}`}
    >
      <ul className="movies-cards__list">
        {outputMoviesList.map((card) => (
          <MoviesCard
            key={card._id || card.id}
            card={card}
            isSavedFilm={isSavedFilm(card.id)}
            isSavedMovies={isSavedMovies}
            onDeleteClick={onDeleteClick}
            onLikeClick={onLikeClick}
          />
        ))}
      </ul>

      {outputMoviesList.length < listMovies.length &&
        !isSavedMovies &&
        listMovies.length >= 5 && (
          <div className="movies-cards__button-container">
            <button
              type="button"
              className="movies-cards__button"
              onClick={handleMoreButtonClick}
            >
              Ещё
            </button>
          </div>
        )}
    </section>
  );
}

export default MoviesCardList;
