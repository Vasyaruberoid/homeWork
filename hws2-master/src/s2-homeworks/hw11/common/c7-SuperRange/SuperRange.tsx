import React from "react";
import { Slider, SliderProps } from "@mui/material";

// Можно добавить дополнительную типизацию для пропсов
interface SuperRangeProps extends SliderProps {
  // добавим обработчик изменения (например, на слайдере)
  onChangeValue?: (value: number | number[]) => void; // если это слайдер диапазона, то это может быть массив
}

const SuperRange: React.FC<SuperRangeProps> = ({ onChangeValue, ...props }) => {

  // Функция для обработки изменения
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (onChangeValue) {
      onChangeValue(newValue); // вызываем переданный колбэк
    }
  };

  return (
    <Slider
      {...props} // передаем все остальные пропсы в MUI Slider
      onChange={handleChange} // передаем нашу функцию обработки события
      sx={{
        color: "#1976d2", // Пример кастомных стилей
        '& .MuiSlider-thumb': {
          backgroundColor: '#1976d2',
        },
        '& .MuiSlider-track': {
          backgroundColor: '#1976d2',
        },
        ...props.sx, // оставляем возможность добавления других стилей через sx
      }}
    />
  );
};

export default SuperRange;
