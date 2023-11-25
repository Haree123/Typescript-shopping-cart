import { useSelector } from "react-redux";
import { RootState } from "../redux/root-state/root-state";

const useQuantity = (isItem: boolean, id?: number): number => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  if (isItem) {
    const foundItem = cartItems.find((item) => item.id === id);
    return foundItem ? foundItem.quantity : 0;
  }

  return cartItems.length;
};

export default useQuantity;
