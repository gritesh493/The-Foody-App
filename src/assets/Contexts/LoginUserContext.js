import { createContext, useContext } from "react";

const LoginUserContext = createContext({ restaurantList: [] });
LoginUserContext.displayName = "LoginUserContext";

export default LoginUserContext;
