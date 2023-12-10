import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterItemsContainer mx-[11%] hidden md:flex md:flex-col items-center justify-center border-t m-2">
      {/* <Link to="/about">
        <div>About</div>
      </Link>
      <div>ContactUs</div> */}
      <div className="p-2 m-2">Made with 💖 by Ritesh</div>
    </div>
  );
};

export default Footer;
