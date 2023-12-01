import { createContext, useContext } from "react";

const RestaurantListContext = createContext({ restaurantList: [] });
RestaurantListContext.displayName = "RestaurantListContext";

export default RestaurantListContext;
