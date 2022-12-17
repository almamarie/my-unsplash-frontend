// import { useEffect, useState } from "react";
// import { fetchUrlData } from "../lib/api";
// import SingleImage from "./SingleImage";
import styles from "./ImageView.module.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "./UI/LoadingSpinner/Spinner";

// const generateImages = (fileUrls) => {
//   return fileUrls.map((fileUrl, index) => {
//     return <SingleImage urlData={fileUrl} key={index} />;
//   });
// };

const ImageView = (props) => {
  const data = useSelector((state) => state.uri);
  const doneFetchingUriData = useSelector(
    (state) => state.ui.doneFetchingUriData
  );
  const fetchingDataError = useSelector((state) => state.ui.fetchingDataError);

  console.log(fetchingDataError);

  return <p>Done here oo.</p>;
  // const [fetchedData, setFetchedData] = useState(false);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   if (fetchedData) return;
  //   async function getAllUrlData() {
  //     await fetchUrlData().then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  //   }
  //   setFetchedData(false);
  //   getAllUrlData();
  //   setFetchedData(true);
  // }, [fetchedData]);

  // const generateReturnValue = () => {
  //   // if data has been fetched successfully
  //   if (fetchedData && data.success) {
  //     return generateImages(data.data);
  //   }

  //   // if tried fetching data but an error occured
  //   if (fetchedData && !data.success) {
  //     return <p>An error occured. Please try again</p>;
  //   }

  //   // if data has not been fetch yet
  //   if (!fetchedData) {
  //     return <p>No images found</p>;
  //   }
  // };

  // return <div className={styles.wrapper}>{generateReturnValue()}</div>;
};
export default ImageView;
