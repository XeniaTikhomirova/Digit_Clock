import { useState, useEffect, useRef } from "react";
import styles from "./digitalclock.module.css";
import Button from "./Button";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [btn, setBtn] = useState({
    state: true,
    name: "Stop time",
  });
  // To stop and to resume time:
  const intervalRef = useRef(null);

  useEffect(() => {
    if (btn.state) {
      intervalRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  function formateTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(
      meridiem
    )}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function handleButton() {
    setBtn((prevValue) => ({
      ...prevValue,
      state: !prevValue.state,
      name: prevValue.state ? "Resume time" : "Stop time",
    }));

    if (btn.state) {
      clearInterval(intervalRef.current);
      console.log("Time stoped!");
    } else {
      intervalRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
      console.log("Time resumed!");
    }
  }
  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock}>
        <span>{formateTime()}</span>
        <br />
        <Button adjust={() => handleButton()} name={btn.name} />
      </div>
    </div>
  );
}
