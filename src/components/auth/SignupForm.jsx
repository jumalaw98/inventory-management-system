import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@pankod/refine-antd";
import { Link } from "@pankod/refine-react-router-v6";

// Validate the inputs:- Name, Email and password with yup
const SignupValidationSchema = Yup.object().shape({
  name: Yup.string()
  .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
  .min(8, "Password must be at least 8 characters")
  .required("Password is required"),
});

// Default initials in the signup fields
const SignupInitialValues = {
  name: "",
  email: "",
  password: "",
};

function SignupForm() {
  return (
    <div className="w-[480px] bg-gray-200 px-10 py-6 rounded-lg mx-auto">
      <Formik
        initialValues={SignupInitialValues}
        validationSchema={SignupValidationSchema}
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
            <p className="text-center text-[30px] mb-3 font-normal">Create an account</p>
            <p className="text-center mb-8 font-light text-gray-600">Start your 30-day free trial.</p>
            <div className="my-4">
              <label htmlFor="name">Name</label>
              <Input
                name="name"
                type="text"
                required
                className={
                  "py-2 text-lg mt-2" + (errors.name && touched.name ? " is-invalid" : "")
                }
                placeholder="Enter your name"
              />
            </div>
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
              <p className="mt-2 font-light text-gray-600">Must be at leats 8 characters</p>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-800 hover:bg-blue-600 text-lg h-[44px] text-white my-5">Get started</Button>
            <div>
              <Button className="w-full h-[44px] bg-white font-semibold text-lg">Sign up with Google</Button>
            </div>
            <div className="text-center mt-5 text-lg">
              <p>Already have an account? <Link to="/auth/login" className="text-blue-900">Log in</Link></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
