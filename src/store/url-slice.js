import { createSlice } from "@reduxjs/toolkit";

const uriSlice = createSlice({
  name: "uri",
  initialState: {
    items: [],
    totalNumber: 0,
  },
  reducers: {
    initializeUriData(state, action) {
      state.items = action.payload.items;
      state.totalNumber = action.payload.totalNumber;
    },
  },
});

export const uriActions = uriSlice.actions;
export default uriSlice;
