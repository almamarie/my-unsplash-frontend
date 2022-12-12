import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={styles["button--cancel"]}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default Button;
