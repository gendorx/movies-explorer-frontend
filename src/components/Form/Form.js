import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

function Form({ onSubmit, children, validate = () => true, ...props }) {
  const methods = useForm({ mode: "onTouched", reValidateMode: "onChange" });

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
