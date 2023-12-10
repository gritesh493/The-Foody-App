import { useFormik } from "formik";
import { SignupSchema } from "../schema/formSchema";
import Footer from "./Footer";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = (setLoggedIn) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, action) => {
        // setLoggedIn(values);
        localStorage.setItem("user", JSON.stringify(values));
        console.log(values);
        action.resetForm();
      },
    });

  console.log(errors);
  // console.log(formik);

  return (
    <div className="SignupContainer min-h-fit flex flex-col self-stretch md:mx-[22%] justify-around">
      <form className="flex flex-col w-full m-2 p-2  ">
        <input
          className="rounded-lg focus:outline-none focus:border-2 border-[#f27d63] m-2 p-2 caret-[#f27d63] "
          type="name"
          autoComplete="off"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.name && touched.name && (
          <div className="text-sm mx-2 px-2 pb-4 font-semibold">
            Name must be atleast 3 characters
          </div>
        )}
        <input
          className="rounded-lg focus:outline-none focus:border-2 border-[#f27d63] m-2 p-2 caret-[#f27d63]"
          type="email"
          autoComplete="off"
          name="email"
          id="signupEmail"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.email && touched.email && (
          <div className="text-sm mx-2 px-2 pb-4 font-semibold">
            Please Enter a valid Email
          </div>
        )}
        <input
          className="rounded-lg focus:outline-none focus:border-2 border-[#f27d63] m-2 p-2 caret-[#f27d63]"
          type="password"
          autoComplete="off"
          name="password"
          id="signupPassword"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.password && touched.password && (
          <div className="text-sm mx-2 px-2 pb-4 font-semibold">
            Password must be atleast 6 characters
          </div>
        )}
        <input
          className="rounded-lg focus:outline-none focus:border-2 border-[#f27d63] m-2 p-2 caret-[#f27d63]"
          type="confirmPassword"
          autoComplete="off"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="text-sm mx-2 px-2 pb-4 font-semibold">
            Confirm Password must Match
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="SubmitButton transition-all w-fit m-4 py-2 px-3 rounded-full  border-[#F2F2F2] text-[#F2F2F2] shadow-xl bg-gradient-to-b from-[#F29863] to-[#F27E63]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className=" m-2 p-2 flex items-center justify-center ">
        <div className="hover:underline underline-offset-4 hover:cursor-pointer transition-all m-2 p-2">
          Login as Guest
        </div>
      </div>
      <div className="m-2 p-2">
        <div className="FooterItemsContainer mx-[11%] flex flex-col items-center justify-center border-t border-[#F27E63] border-opacity-30 m-2">
          <div className="p-2 m-2 font-extralight text-sm">
            Made with 💖 by Ritesh
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
