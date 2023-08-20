import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id='section-about-project'>
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>

        <ul className="about-project__features-list">
          <li className="about-project__features-item">
            <h3 className="about-project__features-title">
              Дипломный проект включал 5 этапов
            </h3>

            <p className="about-project__features-desc">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>

          <li className="about-project__features-item">
            <h3 className="about-project__features-title">
              На выполнение диплома ушло 5 недель
            </h3>

            <p className="about-project__features-desc">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className="about-project__scheme">
          <div className="about-project__scheme-item about-project__scheme-item_backend">
            <span className="about-project__scheme-duration about-project__scheme-duration_backend">
              1 неделя
            </span>

            <span className="about-project__scheme-title">Back-end</span>
          </div>

          <div className="about-project__scheme-item about-project__scheme-item_frontend">
            <span className="about-project__scheme-duration">4 недели</span>

            <span className="about-project__scheme-title">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
