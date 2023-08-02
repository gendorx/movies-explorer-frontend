import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>

        <div className="footer__bottom">
          <p className="footer__copyright">&copy; {currentYear}</p>

          <ul className="footer__list-links">
            <li className="footer__link-item">
              <Link
                className="footer__link"
                target="_blank"
                to="https://practicum.yandex.ru/"
              >
                Яндекс.Практикум
              </Link>
            </li>

            <li className="footer__link-item">
              <Link
                className="footer__link"
                target="_blank"
                to="https://github.com/gendorx"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
