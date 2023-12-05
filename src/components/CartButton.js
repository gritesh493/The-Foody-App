import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItemsContext from "../assets/Contexts/CartItemsContext";

const CartButton = () => {
  const { cartItems } = useContext(CartItemsContext);
  return (
    <>
      {cartItems.length != 0 && (
        <Link to={"/cart"}>
          <div className="transition-all hover:scale-110 border-2 w-fit m-2 py-1 px-3 rounded-full fixed top-[85vh] left-[65vw] bg-gradient-to-b from-[#F29863] to-[#F27E63] border-[#F2F2F2] text-[#F2F2F2] shadow-xl flex md:fixed text-lg ">
            <button>{"Cart | Items - " + cartItems.length}</button>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartButton;
