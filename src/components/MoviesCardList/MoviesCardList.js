import "./MoviesCardList.css";

// import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

function MoviesCardList({ isSavedFilms }) {
  //   const { pathname } = useLocation();

  const testCards = [
    {
      id: 1,
      nameRU: "33 слова о дизайне",
      duration: 107,
      trailerLink: "https://google.com/",
      image:
        "https://images.unsplash.com/photo-1688300963512-ebb74dfd39e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      nameRU: "33 слова о дизайне",
      duration: 107,
      trailerLink: "https://google.com/",
      image:
        "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    },
    // {
    //   id: 3,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 4,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 5,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 6,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 7,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 8,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 9,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 10,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 11,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
    // {
    //   id: 12,
    //   nameRU: "33 слова о дизайне",
    //   duration: 107,
    //   trailerLink: "https://google.com/",
    //   image:
    //     "https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80",
    // },
  ];

  const [testSavedFilms, setSavedFilms] = useState([1, 5, 4]);

  const handleButtonClick = (id) => {
    setSavedFilms(
      testSavedFilms.some((a) => id === a)
        ? testSavedFilms.filter((a) => a !== id)
        : [...testSavedFilms, id]
    );
  };

  const isSavedFilm = (id) => {
    return testSavedFilms.some((a) => a === id);
  };

  return (
    <section className={`movies-cards ${isSavedFilms && "movies-cards_saved"}`}>
      <ul className="movies-cards__list">
        {testCards.map((card, id) => (
          <MoviesCard
            key={id}
            card={card}
            isSavedFilm={isSavedFilm}
            isSavedFilms={isSavedFilms}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </ul>

      {!isSavedFilms && (
        <div className="movies-cards__button-container">
          <button className="movies-cards__button">Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
