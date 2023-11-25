import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import ShoppingCart from "./shopping-cart";
import useQuantity from "../hooks/useItemQuantity";

import { handleShoppingCart } from "../redux/reducers/cart.reducers";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quantity = useQuantity(false);

  const isHomeActive = location.pathname === "/";
  const isStoreActive = location.pathname === "/store";
  const isAboutActive = location.pathname === "/about";

  return (
    <>
      <div className="container flex justify-between items-center h-16 max-w-full px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 2xl:px-60 shadow-md">
        <div className="flex gap-5">
          <Link
            className={`${isHomeActive ? "font-medium" : "text-gray-500"}`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`${isStoreActive ? "font-medium" : "text-gray-500"}`}
            to="/store"
          >
            Store
          </Link>
          <Link
            className={`${isAboutActive ? "font-medium" : "text-gray-500"}`}
            to="/about"
          >
            About
          </Link>
        </div>

        <button
          className="relative inline-block"
          onClick={() => {
            dispatch(
              handleShoppingCart({
                isOpen: true,
              })
            );
          }}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="flex items-center justify-center border rounded-full p-3 text-blue-800 hover:bg-violet-600 hover:text-white"
          />

          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {quantity}
          </div>
        </button>
      </div>

      <ShoppingCart />
    </>
  );
};

export default Navbar;
