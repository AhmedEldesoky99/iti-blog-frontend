import { Link } from "react-router-dom";
import { Form } from "../../components/shared/Form-builder/form-builder";
import { inputs, loginSchema } from "./constant";

export const SignInSec = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            welcome to our blog, you can see a lot of articles ,create ,
            update,delete your own article and see users profile, update your
            profile Lets start
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Form inputs={inputs} schema={loginSchema}>
              <label className="label">
                <span> don't have account?</span>
                <Link to="/sign-up" className="label-text-alt link link-hover">
                  Sign up
                </Link>
              </label>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
