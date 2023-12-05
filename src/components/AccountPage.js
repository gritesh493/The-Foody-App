import react from "react";
import { Link } from "react-router-dom";
const AccountPage = () => {
  return (
    <div className="AccountsPage">
      <Link to="/about">
        <div>About</div>
      </Link>
      <div>ContactUs</div>
    </div>
  );
};

export default AccountPage;
