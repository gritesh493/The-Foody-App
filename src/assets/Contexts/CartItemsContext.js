import { createContext, useContext } from "react";

const CartItemsContext = createContext({ CartItems: [] });
CartItemsContext.displayName = "CartItemsContext";

export default CartItemsContext;
