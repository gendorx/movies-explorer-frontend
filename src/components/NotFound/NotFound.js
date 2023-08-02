import "./NotFound.css";

import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__desc">Страница не найдена</p>

      <button className="not-found__back-button" type="button" onClick={goBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
