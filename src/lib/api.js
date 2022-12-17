import { AJAX } from "./http";

const API_BASE_URL = "http://127.0.0.1:5000";

export const createNewPhoto = async (photoDetails) => {
  // create the url
  const url = API_BASE_URL + "/new-photo";
  try {
    // send the http request with the ajax method
    const data = await AJAX(url, photoDetails);

    // return the response
    return data;
  } catch (error) {
    // print the error to screen
    console.error("failed to add new photo: ", error);
    return { success: false };
  }
};

export async function fetchUrlData() {
  const url = API_BASE_URL + "/all-file-data";
  try {
    const data = await AJAX(url);

    return data;
  } catch (error) {
    console.error("failed to fetch data: ", error);
    return { success: false };
  }
}
