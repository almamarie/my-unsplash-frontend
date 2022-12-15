import styles from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  const classes = `${props.classes} ${styles.button}`;
  return <input type="submit" className={classes} value={props.value} />;
};

export default SubmitButton;
