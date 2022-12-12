import styles from "./Button.module.css";

const Button = (props) => {
  if (props.class === "cancel") {
    return (
      <button
        type={props.type}
        className={styles["button--cancel"]}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    );
  }
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
