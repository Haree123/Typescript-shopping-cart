import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import storeItems from "../data/items.json";
import ShoppingCartItem from "./shopping-cartItem";

import { RootState } from "../redux/root-state/root-state";
import { formatCurrency } from "../utils/formatCurrency";
import { handleShoppingCart } from "../redux/reducers/cart.reducers";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartItems, isOpen } = useSelector((state: RootState) => state.cart);

  return isOpen ? (
    <div className="fixed inset-y-0 right-0 bg-gray-50 w-96">
      <div className="container p-4 flex justify-between items-center">
        <p className="text-xl font-semibold">Cart</p>
        <FontAwesomeIcon
          icon={faClose}
          size="lg"
          className="cursor-pointer"
          onClick={() => {
            dispatch(
              handleShoppingCart({
                isOpen: false,
              })
            );
          }}
        />
      </div>

      {cartItems.map((item) => (
        <ShoppingCartItem {...item} key={item.id} />
      ))}

      {cartItems.length === 0 && (
        <p className="text-center font-semibold text-lg">Cart is empty</p>
      )}

      {cartItems.length > 0 && (
        <p className="flex justify-end mr-4 font-semibold text-lg">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((val) => val.id === cartItem.id);

              if (!item) {
                return 0;
              }

              return total + item.price * cartItem.quantity;
            }, 0)
          )}
        </p>
      )}
    </div>
  ) : null;
};

export default ShoppingCart;
