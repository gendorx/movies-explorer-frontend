import { useFormContext } from "react-hook-form";

function FormInput({ className, classNameInvalid, isDisabled = true, children }) {
  const {
    formState: { isValid },
  } = useFormContext();

  const isActiveButton = !isValid || isDisabled;

  return (
    <button
      type="submit"
      className={`${className} ${isActiveButton && classNameInvalid}`}
      {...(isActiveButton ? { disabled: "disabled" } : {})}
    >
      {children}
    </button>
  );
}

export default FormInput;
