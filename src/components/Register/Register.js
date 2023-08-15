import Sign from "../Sign/Sign";
import FormInput from "../FormInput/FormInput";
import EmailInput from "../EmailInput/EmailInput";

function Register({ onSubmit }) {
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
    required: { value: true, message: "Введите свое имя" },
  };

  const emailProps = {
    ...inputProps,
    required: {
      value: true,
      message: "Требуется ввести электронную почту",
    },
  };

  const passwordProps = {
    ...inputProps,
    required: {
      value: true,
      message: "Требуется ввести пароль",
    },
  };

  return (
    <Sign
      title="Добро пожаловать!"
      submitText="Зарегистрироваться"
      asideText="Уже зарегистрированы?"
      asideLinkText="Войти"
      asideLink="/signin"
      onSubmit={onSubmit}
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
        id="sign-email"
        labelText="E-mail"
        required
        {...emailProps}
      />

      <FormInput
        type="password"
        name="password"
        id="sign-password"
        labelText="Пароль"
        required
        {...passwordProps}
      />
    </Sign>
  );
}

export default Register;
