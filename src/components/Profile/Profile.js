import "./Profile.css";

import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import EmailInput from "../EmailInput/EmailInput";
import FormSubmit from "../FormSubmit/FormSubmit";

import currentUserContext from "../../contexts/currentUserContext";
import { useContext, useEffect, useState } from "react";

function Profile({ onSubmit, signOut }) {
  const currentUser = useContext(currentUserContext);

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

  const [isDisabledSubmit, setDisabledSubmit] = useState(true);
  const [formValues, setFormValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    const newFormValues = { ...formValues, [name]: value };

    setFormValues(newFormValues);
    checkValues(newFormValues);
  };

  const checkValues = (data) => {
    setDisabledSubmit(
      currentUser.name === data.name && currentUser.email === data.email
    );
  };

  useEffect(() => {
    if (!currentUser.name) return;
    console.log(currentUser);
    setDisabledSubmit(true);
  }, [currentUser]);

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <div className="profile__container">
        <Form className="profile__form" onSubmit={onSubmit}>
          <FormInput
            type="text"
            name="name"
            id="profile-name"
            labelText="Имя"
            required
            value={currentUser.name}
            onChange={handleChangeInput}
            {...inputProps}
            {...nameProps}
          />

          <EmailInput
            name="email"
            id="profile-email"
            labelText="E-mail"
            required
            onChange={handleChangeInput}
            value={currentUser.email}
            {...inputProps}
          />

          <div className="profile__links-container">
            <FormSubmit
              className="profile__link-item"
              classNameInvalid="profile__link-item_disabled"
              isDisabled={isDisabledSubmit}
            >
              Редактировать
            </FormSubmit>
            <button
              onClick={signOut}
              className="profile__link-item profile__link-item_color_red"
            >
              Выйти из аккаунта
            </button>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Profile;
