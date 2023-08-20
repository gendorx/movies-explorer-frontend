import { useFormContext } from "react-hook-form";

function FormInput({
  labelClass,
  labelTextClass,
  labelText,
  inputClass,
  inputClassError,
  errorClass,
  id,
  name,
  type,
  onChange,
  ...props
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label className={labelClass} htmlFor={id}>
        <span className={labelTextClass}>{labelText}</span>
        <input
          type={type}
          className={`${inputClass} ${errors[name] && inputClassError}`}
          {...register(name, {onChange, ...props})}
          id={id}
        />
        <span className={errorClass}>{errors[name]?.message}</span>
      </label>
    </>
  );
}

export default FormInput;
