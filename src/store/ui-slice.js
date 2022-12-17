import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    fetchingDataError: undefined,
    loading: false,
  },

  reducers: {
    setFetchDataError(state, action) {
      state.fetchingDataError = action.payload;
    },

    setLoadingTrue(state) {
      state.loading = true;
    },

    setLoadingFalse(state) {
      state.loading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
