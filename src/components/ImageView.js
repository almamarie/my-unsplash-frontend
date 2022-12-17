// import { useEffect, useState } from "react";
// import { fetchUrlData } from "../lib/api";
import SingleImage from "./SingleImage";
import styles from "./ImageView.module.css";

import { useSelector } from "react-redux";

const generateImages = (fileUrls) => {
  // const finalList = [];
  // // take the 3
  // let divider = 0;
  // while (divider < fileUrls.length) {
  //   // take the next 3 files
  //   const slicedData = fileUrls.slice(divider, divider + 3);

  //   // map them to the singleimage component
  //   const mappedData = slicedData.map((fileUrl, index) => {
  //     return <SingleImage urlData={fileUrl} key={index} />;
  //   });

  //   // add it to the finalList list
  //   finalList.push(
  //     <div key={divider} className={styles["flex-element"]}>
  //       {mappedData}
  //     </div>
  //   );

  //   divider += 3;
  // }

  // console.log("Final list: ", finalList);

  // return finalList;

  return fileUrls.map((fileUrl, index) => {
    return <SingleImage urlData={fileUrl} key={index} className={styles['single-image']} />;
  });
};

const ImageView = (props) => {
  const uriData = useSelector((state) => state.uri);
  const fetchingDataError = useSelector((state) => state.ui.fetchingDataError);

  // if there was an error while fetching data
  if (fetchingDataError) {
    return (
      <p className={styles["error-text"]}>
        Error fetching data.
        <br />
        Please try again
      </p>
    );
  }

  // if data have been fetched but there are no images
  if (uriData.totalNumber === 0) {
    return (
      <p className={styles["normal-text"]}>
        No uploaded images.
        <br /> Please upload images to see them here.
      </p>
    );
  }

  // if data has been fetched successfully
  return <div className={styles.wrapper}>{generateImages(uriData.items)}</div>;
};
export default ImageView;
