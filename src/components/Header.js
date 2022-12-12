import { useState } from "react";
import AddPhoto from "./AddPhoto";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";
import Modal from "./UI/Modal/Modal";

const Header = (props) => {
  const [addPhoto, setAddPhoto] = useState(false);

  return (
    <header className={styles.header}>
      {addPhoto && (
        <Modal
          onCloseModal={() => {
            setAddPhoto(false);
          }}
        >
          <AddPhoto
            onCancel={() => {
              setAddPhoto(false);
            }}
          />
        </Modal>
      )}
      <div className={styles["title-wrapper"]}>
        <span className="material-icons icon">person</span>
        <div className={styles["flexible-space"]}>
          <span className={styles.title}>MarieLoumar</span>
          <a className={styles.website} href="devchalleges.io">
            devchallenges.io
          </a>
        </div>
        <input
          className={styles.search}
          type="search"
          placeholder="Search by name"
        />
      </div>
      <Button
        type="submit"
        content="Add a photo"
        onClick={() => {
          setAddPhoto(true);
        }}
      />
    </header>
  );
};

export default Header;
