import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    doneFetchingUriData: false,
    fetchingDataError: undefined,
  },

  reducers: {
    updateDoneFetchingUriData(state, action) {
      state.doneFetchingUriData = action.payload;
    },

    setFetchDataError(state, action) {
      state.fetchingDataError = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
