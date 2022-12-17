import { fetchUrlData } from "../lib/api";
import { uiActions } from "./ui-slice";
import { uriActions } from "./url-slice";

export const fetchAllData = () => {
  return async (dispatch) => {
    try {
      // set the loading flag to true
      dispatch(uiActions.setLoadingTrue());
      // fetch the data from the backend
      const uriData = await fetchUrlData();

      //   put the data into the store
      dispatch(
        uriActions.initializeUriData({
          items: uriData.items || [],
          totalNumber: uriData.totalNumber || 0,
        })
      );

      // set fetching data error to false
      dispatch(uiActions.setFetchDataError(false));
    } catch (error) {
      // set fetching data error to true
      console.log(error);
      dispatch(uiActions.setFetchDataError(true));
    }

    dispatch(uiActions.setLoadingFalse());
  };
};
