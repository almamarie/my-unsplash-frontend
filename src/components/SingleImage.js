import { useState } from "react";
import styles from "./SingleImage.module.css";
import DeleteButton from "./UI/Button/DeleteButton";
import Modal from "./UI/Modal/Modal";

const SingleImage = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [hover, setHover] = useState(false);

  const labelClasses = !hover
    ? `${styles.label} ${styles.hide}`
    : `${styles.label}`;
  const deleteClasses = !hover
    ? `${styles["delete-button"]} ${styles.hide}`
    : `${styles["delete-button"]}`;

  console.log(props.data);

  // const label = "label goes here";
  // const imgUrl =
  //   "https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0";

  return (
    <>
      {showDeleteModal && (
        <Modal
          onClose={() => {
            setShowDeleteModal(false);
          }}
        >
          Delete here
        </Modal>
      )}

      <div
        className={styles.wrapper}
        onMouseEnter={(event) => {
          setHover(true);
        }}
        onMouseOut={(event) => {
          setHover(false);
        }}
      >
        <img
          className={styles.img}
          alt={props.data.label}
          src={props.data.url}
        />
        <DeleteButton
          className={deleteClasses}
          onDelete={() => {
            setShowDeleteModal(true);
          }}
        />
        <p className={labelClasses}>{props.data.label}</p>
      </div>
    </>
  );
};

export default SingleImage;
