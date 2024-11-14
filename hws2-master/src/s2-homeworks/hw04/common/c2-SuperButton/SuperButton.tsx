import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType = "default",
  className,
  disabled,
  ...restProps
}) => {
  const finalClassName = `${s.button} ${s[xType] || s.default} ${
    className || ""
  }`;
  return (
    <button disabled={disabled} className={finalClassName} {...restProps} />
  );
};

export default SuperButton;
