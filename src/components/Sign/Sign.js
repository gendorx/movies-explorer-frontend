import "./Sign.css";

import Form from "../Form/Form";
import FormSubmit from "../FormSubmit/FormSubmit";

import signLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Sign({
  title,
  children,
  submitText,
  asideText,
  asideLinkText,
  asideLink,
  onSubmit,
}) {
  return (
    <main className="sign">
      <div className="sign__container">
        <Link to="/">
          <img
            src={signLogo}
            alt="логотип авторизации"
            className="sign__logo"
          />
        </Link>
        <h2 className="sign__title">{title}</h2>

        <Form id="sign-form" className="sign__form" onSubmit={onSubmit}>
          <div className="sign__form-inputs">{children}</div>
          
          <FormSubmit
            className="sign__form-submit"
            classNameInvalid="sign__form-submit_disabled"
          >
            {submitText}
          </FormSubmit>
        </Form>

        <p className="sign__aside">
          {asideText}
          <Link className="sign__aside-link" to={asideLink}>
            {asideLinkText}
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Sign;
