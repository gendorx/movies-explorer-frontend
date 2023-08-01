import Sign from "../Sign/Sign";
import EmailInput from "../EmailInput/EmailInput";
import FormInput from "../FormInput/FormInput";

function Login() {
  const inputProps = {
    labelClass: "sign__label",
    inputClass: "sign__input",
    errorClass: "sign__error",
    labelTextClass: "sign__label-text",
    inputClassError: "sign__input_error",
  };

  return (
    <Sign
      title="Рады видеть!"
      submitText="Войти"
      asideText="Ещё не зарегистрированы?"
      asideLinkText="Регистрация"
      asideLink="/signup"
    >
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

export default Login;
