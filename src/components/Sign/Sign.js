import "./Sign.css";

import Form from "../Form/Form";

import signLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Sign({
  title,
  children,
  submitText,
  asideText,
  asideLinkText,
  asideLink,
}) {
  const onSubmit = (values) => console.log(values);

  return (
    <section className="sign">
      <div className="sign__container">
        <img src={signLogo} alt="логотип авторизации" className="sign__logo" />
        <h2 className="sign__title">{title}</h2>

        <Form className="sign__form" onSubmit={onSubmit}>
          <div className="sign__form-inputs">{children}</div>

          <button type="submit" className="sign__form-submit">
            {submitText}
          </button>
        </Form>

        <p className="sign__aside">
          {asideText}
          <Link className="sign__aside-link" to={asideLink}>
            {asideLinkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Sign;
