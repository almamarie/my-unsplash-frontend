import styles from "./DeleteButton.module.css";

const DeleteButton = (props) => {
  const classes = `${styles.button} ${props.className}`;
  return (
    <button type="text" className={classes} onClick={props.onDelete}>
      delete
    </button>
  );
};

export default DeleteButton;
