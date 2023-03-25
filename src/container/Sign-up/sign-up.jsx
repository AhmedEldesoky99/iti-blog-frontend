import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/shared/Form-builder/form-builder";
import { Spinner } from "../../components/shared/Spinner";
import { request } from "../../services/axios-utils";
import { signUp } from "../../services/user";
import { alertMsg } from "../../utils/alert";
import { inputs, registerSchema } from "./constant";

export const SignUpSec = () => {
  const navigate = useNavigate();

  const mutation = useMutation(signUp, {
    onSuccess: (res) => {
      if (res.data.success) {
        navigate("/");
        alertMsg(
          res.data ? "welcome to our blog" : undefined,
          res.data.success
        );
        localStorage.setItem("userID", res.data.data.user._id);
        localStorage.setItem("jwt", res.data.data.access_token);
      }
      alertMsg(res.response?.data?.message, res.response?.data?.success);
    },
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      <Spinner loading={mutation.isLoading} />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            welcome to our blog, you can see a lot of articles ,create ,
            update,delete your own article and see users profile, update your
            profile Lets start
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Form
              inputs={inputs}
              schema={registerSchema}
              onSubmit={mutation.mutate}
            >
              <label className="label">
                <span> have account?</span>
                <Link to="/sign-in" className="label-text-alt link link-hover">
                  Sign in
                </Link>
              </label>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
