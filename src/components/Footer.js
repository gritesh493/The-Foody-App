import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterItemsContainer mx-[11%]">
      <Link to="/about">
        <div>About</div>
      </Link>
      <div>ContactUs</div>
    </div>
  );
};

export default Footer;
