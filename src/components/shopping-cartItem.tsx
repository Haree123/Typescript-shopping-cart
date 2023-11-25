import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import storeItems from "../data/items.json";

import { formatCurrency } from "../utils/formatCurrency";
import { removeItemFromCart } from "../redux/reducers/cart.reducers";

interface ShoppingCartItemProps {
  id: number;
  quantity: number;
}

const ShoppingCartItem = ({ id, quantity }: ShoppingCartItemProps) => {
  const dispatch = useDispatch();
  const foundItem = storeItems.find((item) => item.id === id);

  if (!foundItem) {
    return null;
  }

  const { imgUrl, name, price } = foundItem || {};

  return (
    <div className="container h-24 mt-3 px-3 flex items-center gap-2">
      <img
        src={imgUrl}
        alt={name}
        style={{ height: "75px", width: "125px", objectFit: "cover" }}
      />

      <div className="flex-col">
        <p className="mb-1 w-24 overflow-hidden text-ellipsis">
          {name}
          {quantity > 1 && (
            <span className="text-xs text-gray-500 ml-1">x{quantity}</span>
          )}
        </p>
        <p className="text-xs text-gray-500">{formatCurrency(price)}</p>
      </div>

      <p className="text-sm ml-1 w-20">{formatCurrency(price * quantity)}</p>

      <FontAwesomeIcon
        icon={faClose}
        className="cursor-pointer ml-2 border rounded-md p-2"
        onClick={() => {
          dispatch(
            removeItemFromCart({
              id,
            })
          );
        }}
      />
    </div>
  );
};

export default ShoppingCartItem;
