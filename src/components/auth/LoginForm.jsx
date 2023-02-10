import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@pankod/refine-antd";

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
    <div className="w-[515px] border-2 border-red-200 px-10 py-6">
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
            <h3>Inventory</h3>
            <p>Lot in to your account</p>
            <p>Welcome back! Please enter your details</p>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                type="email"
                required
                className={
                  "" + (errors.email && touched.email ? " is-invalid" : "")
                }
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                type="password"
                required
                className={
                  "" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
                placeholder="Password"
              />
            </div>
            <div>
              <div>
                <input name="remember" type="checkbox" />
                <label htmlFor="remember">Remember for 30 days</label>
              </div>
              <div>
                <p>Forgot password</p>
              </div>
            </div>
            <Button type="submit">Login</Button>
            <div>
              <Button>Sign In with Google</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
