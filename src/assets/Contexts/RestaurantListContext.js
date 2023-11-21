import { createContext, useContext } from "react";

const RestaurantListContext = createContext({ restaurantList: [1, 2, 3] });
RestaurantListContext.displayName = "RestaurantListContext";

export default RestaurantListContext;
