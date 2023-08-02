import "./AboutMe.css";

import profileLogo from "../../images/profile-another.png";

function AboutMe() {
  return (
    <section className="aboutme" id="section-about-me">
      <div className="aboutme__container">
        <h2 className="aboutme__title">Студент</h2>

        <div className="aboutme__bio">
          <div className="aboutme__bio-container">
            <h3 className="aboutme__name">Виталий</h3>
            <p className="aboutme__about">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__desc">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>

            <ul className="aboutme__socials-list">
              <li className="aboutme__socials-list-item">
                <a
                  href="https://github.com/gendorx"
                  target="_blank"
                  rel="noreferrer"
                  className="aboutme__link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          <img
            src={profileLogo}
            className="aboutme__photo"
            alt="изображение разработчика"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
