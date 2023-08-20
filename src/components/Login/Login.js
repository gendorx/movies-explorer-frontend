import Sign from "../Sign/Sign";
import EmailInput from "../EmailInput/EmailInput";
import FormInput from "../FormInput/FormInput";

function Login({ onSubmit }) {
  const inputProps = {
    labelClass: "sign__label",
    inputClass: "sign__input",
    errorClass: "sign__error",
    labelTextClass: "sign__label-text",
    inputClassError: "sign__input_error",
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
      message: "Требуется ввести пароль"
    }
  }

  return (
    <Sign
      title="Рады видеть!"
      submitText="Войти"
      asideText="Ещё не зарегистрированы?"
      asideLinkText="Регистрация"
      asideLink="/signup"
      onSubmit={onSubmit}
    >
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

export default Login;
