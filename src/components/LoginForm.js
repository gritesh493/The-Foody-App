import { useFormik } from "formik";
import { LoginSchema } from "../schema/formSchema";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ setLoggedIn }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        const localUser = JSON.parse(localStorage.getItem("user"));
        console.log(localUser);
        //Checking UserName and Password in LocalStorage
        localUser.email == values.email && localUser.password == values.password
          ? setLoggedIn(localUser)
          : alert("invalid Credentials");
        action.resetForm();
      },
    });

  console.log(errors);
  // console.log(formik);

  return (
    <div className="LoginContainer min-h-fit flex flex-col self-stretch md:mx-[22%] justify-around">
      <form className="flex flex-col w-full m-2 p-4  ">
        <input
          className="rounded-lg focus:outline-none focus:border-2 border-[#f27d63] m-2 p-2 caret-[#f27d63] "
          type="email"
          autoComplete="off"
          name="email"
          id="loginEmail"
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
          className="rounded-lg focus:outline-none focus:border-2 border-[#f27d63] m-2 p-2 caret-[#f27d63] "
          type="password"
          autoComplete="off"
          name="password"
          id="loginpassword"
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

        <div className=" flex justify-center">
          <button
            type="submit"
            className="SubmitButton transition-all w-fit m-4 py-2 px-3 rounded-full  border-[#F2F2F2] text-[#F2F2F2] shadow-xl bg-gradient-to-b from-[#F29863] to-[#F27E63]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="m-2 flex items-center justify-center ">
        <button
          className="hover:underline underline-offset-4 hover:cursor-pointer transition-all "
          onClick={() =>
            setLoggedIn({
              name: "Guest",
              email: "guest@guest.com",
              password: "Guest123",
              confirmPassword: "Guest123",
            })
          }
        >
          Login as Guest
        </button>
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

export default LoginForm;
