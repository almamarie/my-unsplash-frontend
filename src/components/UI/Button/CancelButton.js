import styles from "./Button.module.css";

const CancelButton = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default CancelButton;
