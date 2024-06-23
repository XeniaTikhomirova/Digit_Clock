import { useState, useEffect } from "react";
import styles from "./digitalclock.module.css";

export default function DigitalClock() {
  const [time, setTime] = useState("00:00:00");

  function handleUpdate() {
    console.log("Time updated!");
    let getDate = new Date().getTime();
    setTime(getDate);
    console.log(getDate);
  }

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock}>
        <span>{time}</span>
        <br />
        <button onClick={handleUpdate}>Uodate time</button>
      </div>
    </div>
  );
}
