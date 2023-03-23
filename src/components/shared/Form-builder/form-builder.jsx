import { useForm } from "react-hook-form";
import { Input } from "../Inputs/inputs";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = ({ inputs, schema, children, onSubmit }) => {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const renderInputs = (input, errors) => {
    switch (input.cat) {
      default:
        return (
          <Input
            placeholder={input.placeholder}
            label={input.label}
            type={input.type}
            name={input.name}
            register={register(input.name)}
            error={errors[input.name]?.message}
          />
        );
    }
  };

  const submit = (data) => {
    console.log("inside form", data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      {inputs.map((input) => renderInputs(input, formState.errors))}
      {children}
      <div className="form-control mt-6">
        <input className="btn btn-primary" value="submit" type="submit" />
      </div>
    </form>
  );
};
