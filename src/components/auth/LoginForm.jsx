import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@pankod/refine-antd";
import { Link } from "@pankod/refine-react-router-v6";

// Validate the inputs:- Email and password with yup
const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// Default initials in the login fields
const LoginInitialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  return (
    <div className="w-[480px] bg-gray-200 px-10 py-6 rounded-lg mx-auto">
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LoginValidationSchema}
        // onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <h3 className="text-center text-[47px] font-black font-sans" style={{fontFamily: "Gloria Hallelujah"}}>Inventory</h3>
            <p className="text-center text-[30px] mb-3 font-normal">Log in to your account</p>
            <p className="text-center mb-8 font-light text-gray-600">Welcome back! Please enter your details</p>
            <div className="my-4">
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                type="email"
                required
                className={
                  "py-2 text-lg mt-2" + (errors.email && touched.email ? " is-invalid" : "")
                }
                placeholder="Enter your email"
              />
            </div>
            <div className="my-4">
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                type="password"
                required
                className={
                  "py-2 text-lg mt-2" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between text-lg">
              <div className="">
                <input name="remember" type="checkbox" className="mr-1" />
                <label htmlFor="remember">Remember for 30 days</label>
              </div>
              <div>
                <p>Forgot password</p>
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-lg h-[44px] text-white my-5">Sign In</Button>
            <div>
              <Button className="w-full h-[44px] bg-white font-semibold text-lg">Sign In with Google</Button>
            </div>
            <div className="text-center mt-5 text-lg">
              <p>Don't have an account? <Link to="" className="text-blue-900">Sign up</Link></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
