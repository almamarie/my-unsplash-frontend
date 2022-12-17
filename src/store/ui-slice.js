import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    doneFetchingUriData: false,
    fetchingDataError: undefined,
    loading: false,
  },

  reducers: {
    updateDoneFetchingUriData(state, action) {
      state.doneFetchingUriData = action.payload;
    },

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
