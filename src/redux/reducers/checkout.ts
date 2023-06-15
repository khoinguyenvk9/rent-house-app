import { IHouse } from "@/types/house";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICheckoutState {
  house?: IHouse;
}

const initialState: ICheckoutState = {
  house: undefined,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: (state: ICheckoutState) => {
      state.house = undefined;
    },
    setHouse: (state: ICheckoutState, action: PayloadAction<IHouse>) => {
      state.house = action.payload;
    },
  },
});

export const { resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
