import { configureStore } from "@reduxjs/toolkit";
import uriSlice from "./url-slice";

const store = configureStore({
  reducer: {
    uri: uriSlice.reducer,
  },
});

export default store;
