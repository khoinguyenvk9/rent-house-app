import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICheckoutState {
  theme?: "dark" | "light";
}

const initialState: ICheckoutState = {
  theme: "dark",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: (state: ICheckoutState) => {
      state.theme = "dark";
    },
  },
});

export const { resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
