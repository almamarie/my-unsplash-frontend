import styles from "./Spinner.module.css";

const Spinner = (props) => {
  const classes = `${styles["lds-spinner"]} ${props.classes}`;
  return (
    <div className={classes}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
