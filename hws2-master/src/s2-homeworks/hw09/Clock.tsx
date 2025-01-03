import { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);
  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    if (timerId) return; // если таймер уже запущен, не запускаем новый

    const newTimerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    setTimerId(newTimerId);
  };
  const stop = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(undefined);
    }
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  let get2DigitString = (num: number) => (num < 10 ? "0" + num : num);

  const stringTime = `${get2DigitString(date.getHours())}:${get2DigitString(
    date.getMinutes()
  )}:${get2DigitString(date.getSeconds())}`;
  const stringDate = `${get2DigitString(date.getDate())}.${get2DigitString(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;

  const stringDay = date.toLocaleString("en-US", { weekday: "long" });
  const stringMonth = date.toLocaleString("en-US", { month: "long" });

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>,{" "}
              <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={timerId !== undefined}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={timerId === undefined}
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
