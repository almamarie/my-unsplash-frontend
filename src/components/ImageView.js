import { useState } from "react";
import styles from "./ImageView.module.css";
import DeleteButton from "./UI/Button/DeleteButton";
import Modal from "./UI/Modal/Modal";

const ImageView = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
        style={{
          backgroundImage:
            "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw3-WJaIk5gjbGVeExYjKJ4_&ust=1670964318831000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCj_qb59PsCFQAAAAAdAAAAABAE')",
        }}
      >
        <DeleteButton
          onDelete={() => {
            setShowDeleteModal(true);
          }}
        />
      </div>
    </>
  );
};
export default ImageView;
