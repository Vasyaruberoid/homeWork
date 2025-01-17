import { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

/*
 * 1 - передать значения в оба слайдера
 * 2 - дописать типы и логику функции change
 * 3 - сделать стили в соответствии с дизайном
 * */

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>("hw11-value1", 0));
  const [value2, setValue2] = useState<number[]>(restoreState<number[]>("hw11-value2", [0, 100]));

  const change = (newValue: number | number[], value: number) => {
    // Обработка изменения значения
    if (Array.isArray(newValue)) {
      // Если приходит массив (для второго слайдера), обновляем его
      setValue2(newValue);
    } else {
      // Если приходит одиночное значение
      if (value === 1) {
        // Обновляем одиночный слайдер и устанавливаем его как первое значение диапазона
        setValue1(newValue);
        setValue2([newValue, value2[1]]); // гарантируем, что первое значение диапазона будет равно value1
      } else if (value === 2) {
        // Для второго слайдера обновляем только второе значение диапазона
        setValue2([value2[0], newValue]);
      }
    }
  };

  return (
    <div id={"hw11"}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={"hw11-value"} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={"hw11-single-slider"}
              value={value1}
              onChange={(e, newValue) => change(newValue, 1)} // передаем новое значение для value1
            />
          </div>
          <div className={s.wrapper}>
            <span id={"hw11-value-1"} className={s.number}>
              {value2[0]} {/* Отображаем первое значение из диапазона */}
            </span>
            <SuperRange
              id={"hw11-double-slider"}
              value={value2} // передаем массив значений
              onChange={(e, newValue) => change(newValue, 2)} // передаем новое значение для value2
            />
            <span id={"hw11-value-2"} className={s.number}>
              {value2[1]} {/* Отображаем второе значение из диапазона */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;
    