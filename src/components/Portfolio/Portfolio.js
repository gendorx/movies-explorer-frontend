import "./Portfolio.css";

import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio" id="section-portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>

        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <Link to="#" className="porfolio__list-item-link">
              <p className="portfolio__text">Статичный сайт</p>
              <p className="portfolio__arrow">↗</p>
            </Link>
          </li>

          <li className="portfolio__list-item">
            <Link to="#" className="porfolio__list-item-link">
              <p className="portfolio__text">Адаптивный сайт</p>
              <p className="portfolio__arrow">↗</p>
            </Link>
          </li>

          <li className="portfolio__list-item">
            <Link to="#" className="porfolio__list-item-link">
              <p className="portfolio__text">Одностраничное приложение</p>
              <p className="portfolio__arrow">↗</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
