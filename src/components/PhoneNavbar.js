import React, { useContext } from "react";
import account from "../assets/account.png";
import searchIcon from "../assets/searchIcon.png";
import cart from "../assets/cart.png";
import homeIcon from "../assets/homeIcon.png";
import { Link } from "react-router-dom";
import CartItemsContext from "../assets/Contexts/CartItemsContext";

const PhoneNavbar = () => {
  const { cartItems } = useContext(CartItemsContext);
  return (
    <div
      className={
        "phoneNavbarContainer md:hidden w-full justify-around flex items-center h-16 sm:h-20 border border-gray-200 shadow-xl align-middle px-[1%] sm:px-[11%] sticky bottom-0 bg-white z-10"
      }
    >
      <Link to={"/"}>
        <button className="homeIcon p-1 w-9 flex items-center ">
          <img src={homeIcon} />
        </button>
      </Link>
      <Link to={"/search"}>
        <button className="searchIcon p1 w-8 flex items-center">
          <img src={searchIcon} />
        </button>
      </Link>
      <Link to={"/cart"}>
        <button className="cartIcon p1 w-9 flex items-center">
          <img src={cart} />
          <div className="cartIconNumber relative -top-3 p-1 border rounded-full text-xs bg-[#F27E63] font-semibold text-white">
            {cartItems.length}
          </div>
        </button>
      </Link>
      <Link to={"/account"}>
        <button className="accountIcon p1 w-9 flex items-center">
          <img src={account} />
        </button>
      </Link>
    </div>
  );
};

export default PhoneNavbar;
