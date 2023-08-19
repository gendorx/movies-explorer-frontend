import { FormProvider, useForm } from "react-hook-form";

function Form({ onSubmit, children, validate = () => true, ...props }) {
  const methods = useForm({ mode: "onChange" });

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
