import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === "/";
  const isStoreActive = location.pathname === "/store";
  const isAboutActive = location.pathname === "/about";

  return (
    <div className="container flex justify-between items-center h-14 max-w-full px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 2xl:px-60 shadow-md">
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

      <button className="text-blue-800 hover:text-violet-600">
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Navbar;
