import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantDetails from "./components/RestaurantDetails";
import Cart from "./components/Cart";
import SearchPage from "./components/SearchPage";
import AccountPage from "./components/AccountPage";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/cart", element: <Cart />, errorElement: <Error /> },
      { path: "/search", element: <SearchPage />, errorElement: <Error /> },
      { path: "/account", element: <AccountPage />, errorElement: <Error /> },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
        errorElement: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
