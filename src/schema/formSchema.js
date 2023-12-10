import * as yup from "yup";
export const SignupSchema = yup.object({
  name: yup.string().min(3).max(25).required("Please enter your Name"),
  email: yup.string().email().required("Please enter your Email address"),
  password: yup.string().min(6).max(25).required("Please enter your Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please enter your Password Again"),
});
export const LoginSchema = yup.object({
  email: yup.string().email().required("Please enter your Email address"),
  password: yup.string().min(6).max(25).required("Please enter your Password"),
});
