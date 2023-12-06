import { useContext, useEffect, useState } from "react";
import CartItemsContext from "../assets/Contexts/CartItemsContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const prices = cartItems?.map((ele) => {
    const str = ele?.restaurant?.info?.costForTwo;
    const number = str.match(/\d+/g);
    return Number(number);
  });
  let totalPrice = 0;
  if (prices.length != 0) {
    totalPrice = prices.reduce((sum, i) => {
      return sum + i;
    });
  } else {
    totalPrice = 0;
  }

  const handleClick = (id) => {
    console.log(id);
    const arrayWithouteid = cartItems.filter((ele) => {
      //   console.log(ele);
      return ele?.itemId !== id;
    });
    setCartItems(arrayWithouteid);
  };
  //   aboutRestaurant = restaurantList[0];
  console.log(cartItems);
  const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
  return cartItems.length == 0 ? (
    <div className="emptyCart m-[11%] flex flex-col items-center justify-center h-[70vh] md:h-fit ">
      <div className="text-2xl">Your Cart is Empty !!!</div>
      <Link to={"/"}>
        <div className="font-thin cursor-pointer hover:border-b-2 hover:border-slate-300 transition-all">
          Add some Food
        </div>
      </Link>
    </div>
  ) : (
    <div className="CartPage md:mx-[22%] transition-all pb-20">
      {/* <button className="ClearCart" onClick={() => setCartItems([])}>
        Clear Cart
      </button> */}
      <div className="topContainer">
        <div className="listContainer">
          {cartItems?.map((ele) => {
            // console.log(ele);
            const str = ele?.restaurant?.info?.costForTwo;
            const number = str.match(/\d+/g);
            return (
              <div className="listItemContainer flex max-h-32 justify-between items-center m-2 p-2 border-b-2 mt-4">
                <Link to={"/restaurant/" + ele?.restaurant?.info?.id}>
                  <div className="itemInfo flex flex-col">
                    <h1 className="font-semibold text-lg">{ele.item}</h1>
                    <div className="font-normal text-sm ">
                      {"From " + ele?.restaurant?.info?.name}
                    </div>
                    <div className="font-normal pt-2  ">{"₹" + number}</div>
                  </div>
                </Link>

                <div
                  className={
                    ele?.restaurant?.info?.name +
                    "Image" +
                    " w-32 h-32 p-2 m-2 mr-0 pr-0"
                  }
                >
                  <img
                    src={imageLink + ele?.restaurant?.info?.cloudinaryImageId}
                    key={
                      ele?.restaurant?.info?.name +
                      " | " +
                      ele?.restaurant?.info?.name
                    }
                    className="w-full h-full object-cover rounded-xl p-1"
                    alt={ele?.restaurant?.info?.name + " - Image"}
                  />
                  <button
                    className="RemoveFromCartButton  flex z-1 relative -top-[25%] left-[1%] right-[1%] w-full text-center items-center justify-center"
                    onClick={() => handleClick(ele?.itemId)}
                  >
                    <div className="bg-white bg-opacity-95 border-2 rounded-md cursor-pointer mx-1 px-1 shadow-lg">
                      Remove
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to={"/"}>
        <div className="font-thin cursor-pointer mb-5 m-2 p-2 px-[11%] border text-center rounded-xl bg-slate-50 hover:bg-slate-100 hover:scale-105 transition-all">
          Add More Items ...
        </div>
      </Link>
      <div className="middleContainer flex flex-col">
        <div className="Amount px-[11%] font-semibold text-lg">
          Price Details
        </div>
        <div className="BillSection m-1 px-[11%] flex  rounded-lg items-center justify-between">
          <div className="Amount  thin">{"Price "}</div>
          <div className="OrderButton text-black">{" ₹" + totalPrice}</div>
        </div>
        <div className="BillSection m-1 px-[11%] flex  rounded-lg items-center justify-between">
          <div className="Amount  thin">{"Discount "}</div>
          <div className="OrderButton  font-semibold text-green-600">
            {"- ₹" + 150}
          </div>
        </div>
        <div className="BillSection m-1 px-[11%] flex  rounded-lg items-center justify-between">
          <div className="Amount  thin">{"Coupons for you "}</div>
          <div className="OrderButton  text-gray-500">{"- ₹" + 20}</div>
        </div>
        <div className="BillSection m-1 px-[11%] flex  rounded-lg items-center justify-between">
          <div className="Amount  thin">{"Delivery Charges "}</div>
          <div className="OrderButton  text-black">{"- ₹" + 59}</div>
        </div>
        <div className="BillSection m-1 px-[11%] flex  rounded-lg items-center justify-between border-t-2 border-dashed font-semibold">
          <div className="Amount  thin">{"Total Price "}</div>
          <div className="OrderButton  text-black">
            {"₹" + (totalPrice - (150 + 20 + 59))}
          </div>
        </div>

        <div className="BillSection m-2 px-[11%] flex  rounded-lg items-center justify-between font-semibold">
          <div className="font-semibold  text-green-600">
            {"You will save ₹" + (150 + 20 + 59) + " on this order"}
          </div>
        </div>
        <div className="BillSection h-20 mt-4 m-2 px-[11%] flex border-2 rounded-lg items-center justify-between font-semibold">
          <div className="font-semibold  text-lg">
            {`₹${
              totalPrice - (150 + 20 + 59) < 0
                ? 0
                : totalPrice - (150 + 20 + 59)
            }`}
          </div>
          <button className="p-2 m-2 text-lg rounded-lg bg-gradient-to-b from-[#F29863]  to-[#F27E63] border-[#F2F2F2] text-[#F2F2F2] hover:scale-110 transition-transform">
            Place Order
            <div className="text-xs font-thin ">
              {"( This Feature will be updated... )"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
