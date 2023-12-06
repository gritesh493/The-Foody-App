import react from "react";
import { Link } from "react-router-dom";
const AccountPage = () => {
  return (
    <div className="AccountsPage h-[100vh] flex flex-col items-center justify-center">
      <Link to="/about">
        <div>About</div>
      </Link>
      <div>ContactUs</div>
    </div>
  );
};

export default AccountPage;
