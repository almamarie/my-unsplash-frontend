import { uiActions } from "./ui-slice";

export const updateDoneFetchingUriData = (state) => {
  return (dispatch, state) => {
    dispatch(uiActions.updateDoneFetchingUriData(state));
  };
};
