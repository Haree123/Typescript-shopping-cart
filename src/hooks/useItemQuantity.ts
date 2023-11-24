import { useSelector } from "react-redux";
import { RootState } from "../redux/root-state/root-state";

const useItemQuantity = (id: number): number => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const foundItem = cartItems.find((item) => item.id === id);

  return foundItem ? foundItem.quantity : 0;
};

export default useItemQuantity;
