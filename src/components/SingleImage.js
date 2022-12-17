import { useState } from "react";
import styles from "./SingleImage.module.css";
import DeleteButton from "./UI/Button/DeleteButton";
import Modal from "./UI/Modal/Modal";

const SingleImage = (props) => {
  const data = props.urlData;

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [hover, setHover] = useState(false);

  // set the classes of the label and delete buttons
  const labelClasses = !hover
    ? `${styles.label} ${styles.hide}`
    : `${styles.label}`;
  const deleteClasses = !hover
    ? `${styles["delete-button"]} ${styles.hide}`
    : `${styles["delete-button"]}`;

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
        onMouseLeave={(event) => {
          setHover(false);
        }}
      >
        <img className={styles.img} alt={data.label} src={data.url} />
        <DeleteButton
          className={deleteClasses}
          onDelete={() => {
            setShowDeleteModal(true);
          }}
        />
        <p className={labelClasses}>{data.label}</p>
      </div>
    </>
  );
};

export default SingleImage;
