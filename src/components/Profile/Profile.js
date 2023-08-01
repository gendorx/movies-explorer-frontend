import "./Profile.css";

import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import EmailInput from "../EmailInput/EmailInput";

function Profile() {
  const noop = (e) => e.preventDefault();

  const nameProps = {
    minLength: { value: 2, message: "Минимальная длина - 2 символа" },
    maxLength: { value: 30, message: "Максимальная длина - 30 символов" },
  };

  const inputProps = {
    labelClass: "profile__label",
    inputClass: "profile__input",
    errorClass: "profile__input-error",
    labelTextClass: "profile__input-text",
    inputClassError: "profile__input_error",
  };

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__container">
        <Form className="profile__form" onSubmit={noop}>
          <FormInput
            type="text"
            name="name"
            id="profile-name"
            labelText="Имя"
            required
            value="Виталий"
            {...inputProps}
            {...nameProps}
          />

          <EmailInput
            name="email"
            id="profile-email"
            labelText="E-mail"
            required
            value="pochta@yandex.ru"
            {...inputProps}
          />

          <div className="profile__button-container">
            <button className="profile__button" type="submit">
              Редактировать
            </button>

            <button
              className="profile__button profile__button_color_red"
              type="submit"
            >
              Выйти из аккаунта
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Profile;
