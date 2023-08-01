import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__desc">Страница не найдена</p>

      <button className="not-found__back-button">Назад</button>
    </section>
  );
}

export default NotFound;
