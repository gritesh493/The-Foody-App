import react, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import LoginUserContext from "../assets/Contexts/LoginUserContext";

const AccountPage = () => {
  const [formType, setFormType] = useState("signup");
  const { loggedIn, setLoggedIn } = useContext(LoginUserContext);
  console.log(loggedIn);
  return loggedIn.length == 0 ? (
    <div className="AccountsPage min-h-[100vh] flex flex-col bg-gradient-to-l from-[#f28e63] to-[#fe9f3298] rounded-b-3xl m-0 md:mx-1">
      {formType == "signup" ? (
        <div className="SignupMessageContainer flex flex-col items-center justify-center m-2 p-2 bg-opacity-50  text-[#F2F2F2] rounded-xl">
          <h1 className="text-3xl font-semibold">Signup</h1>
          <p className="text font-light">
            Please register to continue using the app
          </p>
        </div>
      ) : (
        <div className="SignupMessageContainer flex flex-col items-center justify-center mt-0 m-2 p-2 bg-opacity-50  text-[#F2F2F2] rounded-xl">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-sm bold">Please Login to continue using the app</p>
        </div>
      )}
      <div className="formContainer flex flex-col items-center justify-center m-2 p-2 bg-white rounded-xl bg-opacity-70 md:mx-[22%]">
        <div className="formButtons flex w-full justify-around items-stretch">
          <button
            className={
              formType == "login"
                ? "SignupButton transition-all hover:scale-105 border w-full m-4 py-2 px-3 rounded-full  border-[#f27d6360] "
                : "SignupButton transition-all border-1 w-full m-4 py-2 px-3 rounded-full  border-[#F2F2F2] text-[#F2F2F2] shadow-xl bg-gradient-to-b from-[#F29863] to-[#F27E63]"
            }
            onClick={() => setFormType("signup")}
          >
            Signup
          </button>
          <button
            className={
              formType == "signup"
                ? "SignupButton transition-all hover:scale-105 border w-full m-4 py-2 px-3 rounded-full  border-[#f27d6360] "
                : "SignupButton transition-all border-1 w-full m-4 py-2 px-3 rounded-full  border-[#F2F2F2] text-[#F2F2F2] shadow-xl bg-gradient-to-b from-[#F29863] to-[#F27E63]"
            }
            onClick={() => setFormType("login")}
          >
            Login
          </button>
        </div>
        {formType == "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForm setLoggedIn={setLoggedIn} />
        )}
      </div>
      {/* <div className="FooterPage h-[100vh] flex flex-col items-center justify-center">
        <Link to="/about">
          <div>About</div>
        </Link>
        <div>ContactUs</div>
      </div> */}
    </div>
  ) : (
    <div className="AccountsPageLoggedin min-h-[100vh] flex flex-col items-center justify-center">
      <div className="text-4xl font-thin">Welcome {loggedIn.name},</div>
      <Link to={"/"}>
        <div className="text-gray-500 hover:underline underline-offset-4 hover:cursor-pointer transition-all m-2 p-2">
          Order something fresh !
        </div>
      </Link>
      <button
        className="LogoutButton transition-all border-1 w-fit m-4 py-2 px-3 rounded-full  border-[#F2F2F2] text-[#F2F2F2] shadow-xl bg-gradient-to-b from-[#F29863] to-[#F27E63]"
        onClick={() => {
          setLoggedIn([]);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPage;
