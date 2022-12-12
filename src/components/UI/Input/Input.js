import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
