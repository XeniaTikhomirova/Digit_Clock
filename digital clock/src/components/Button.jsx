import styles from "./button.module.css";

export default function Button(props) {
  return (
    <div>
      <div className={styles.buttonsContainer}>
        <button onClick={props.adjust} className={styles.button}>
          {props.name}
        </button>
      </div>
    </div>
  );
}
