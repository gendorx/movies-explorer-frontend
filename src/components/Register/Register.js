import Sign from "../Sign/Sign";
import FormInput from "../FormInput/FormInput";
import EmailInput from "../EmailInput/EmailInput";

function Register() {
  const inputProps = {
    labelClass: "sign__label",
    inputClass: "sign__input",
    errorClass: "sign__error",
    labelTextClass: "sign__label-text",
    inputClassError: "sign__input_error",
  };

  const nameProps = {
    minLength: { value: 2, message: "Минимальная длина - 2 символа" },
    maxLength: { value: 30, message: "Максимальная длина - 30 символов" },
  };

  return (
    <Sign
      title="Добро пожаловать!"
      submitText="Зарегистрироваться"
      asideText="Уже зарегистрированы?"
      asideLinkText="Войти"
      asideLink="/signin"
    >
      <FormInput
        type="text"
        name="name"
        id="sign-name"
        labelText="Имя"
        {...inputProps}
        {...nameProps}
      />

      <EmailInput
        name="email"
        id="sign-name"
        labelText="E-mail"
        required
        {...inputProps}
      />

      <FormInput
        type="password"
        name="password"
        id="sign-password"
        labelText="Пароль"
        required
        {...inputProps}
      />
    </Sign>
  );
}

export default Register;
