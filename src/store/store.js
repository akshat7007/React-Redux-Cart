// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "../store/slice/ui-slice";
import cartSlice from "./slice/cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
