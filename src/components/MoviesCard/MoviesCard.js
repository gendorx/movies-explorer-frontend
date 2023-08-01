import "./MoviesCard.css";

import { Link } from "react-router-dom";
import { convertDuration } from "../../utils/utils";

function MoviesCard({ card, isSavedFilms, isSavedFilm, handleButtonClick }) {
  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{card.nameRU}</h2>
          <p className="movie-card__duration">
            {convertDuration(card.duration)}
          </p>
        </div>

        {isSavedFilms ? (
          <button
            className={`movie-card__button-delete`}
            onClick={() => {}}
          ></button>
        ) : (
          <button
            className={`movie-card__button-save ${
              isSavedFilm(card.id) && "movie-card__button-save_active"
            }`}
            onClick={() => handleButtonClick(card.id)}
          ></button>
        )}
      </div>

      <Link className="movie-card__link" to={card.trailerLink} target="_blank">
        <img className="movie-card__image" src={card.image} alt={card.nameRU} />
      </Link>
    </li>
  );
}

export default MoviesCard;
