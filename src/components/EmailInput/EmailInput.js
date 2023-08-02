import FormInput from "../FormInput/FormInput";
import validator from "validator";

function EmailInput({ ...props }) {
  const validate = (value) =>
    validator.isEmail(value) || "Требуется ввести электронную почту";

  return <FormInput type="email" validate={validate} {...props} />;
}

export default EmailInput;
