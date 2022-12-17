import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import uriSlice from "./url-slice";

const store = configureStore({
  reducer: {
    uri: uriSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
