import { fetchUrlData } from "../lib/api";
import { uiActions } from "./ui-slice";
import { uriActions } from "./url-slice";

export const fetchAllData = () => {
  return async (dispatch) => {
    try {
      // fetch the data from the backend
      const uriData = await fetchUrlData();

      //   put the data into the store
      dispatch(
        uriActions.initializeUriData({
          items: uriData.items || [],
          totalQuantity: uriData.totalNumber || 0,
        })
      );

      // set updateDoneFetchingUriData to true
      dispatch(uiActions.updateDoneFetchingUriData(true));

      // set fetching data error to false
      dispatch(uiActions.setFetchDataError(false));
    } catch (error) {
      // set fetching data error to true
      console.log(error);
      dispatch(uiActions.setFetchDataError(true));
    }
  };
};
