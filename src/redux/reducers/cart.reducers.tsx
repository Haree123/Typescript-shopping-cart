import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface item {
  id: number;
  quantity: number;
}

interface itemId {
  id: number;
}

export interface CartItems {
  cartItems: item[];
}

const initialState: CartItems = {
  cartItems: [],
};

const CartReducer = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    increaseCartQuantity: (state, action: PayloadAction<item>) => {
      const isExists = state.cartItems.find(
        (val) => val.id === action.payload.id
      );

      if (isExists) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity,
              }
            : item
        );
      } else {
        state.cartItems.push({
          id: action.payload.id,
          quantity: 1,
        });
      }
    },
    decreaseCartQuantity: (state, action: PayloadAction<item>) => {
      const isExists = state.cartItems.find(
        (val) => val.id === action.payload.id
      );

      if (isExists) {
        isExists.quantity = action.payload.quantity;

        if (isExists.quantity <= 0) {
          state.cartItems.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    removeItemFromCart: (state, action: PayloadAction<itemId>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeItemFromCart,
} = CartReducer.actions;

export default CartReducer.reducer;
