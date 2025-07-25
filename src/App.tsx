import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import NotFound from "./components/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import type { ProductProps } from "./components/Product";

function App() {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);
  const [wishListItems, setWishListItems] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setCartItems((prev) => [...prev, product]);
  };

  const addToWishList = (product: ProductProps) => {
    setWishListItems((prev) => [...prev, product]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Shop addToCart={addToCart} addToWishList={addToWishList} />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Nav />
          <Cart cartItems={cartItems} />
          <Footer />
        </>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <>
          <Nav />
          <WishList wishListItems={wishListItems} />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Nav />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Nav />
          <Register />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Nav />
          <NotFound />
          <Footer />
        </>
      ),
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;
