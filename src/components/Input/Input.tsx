import React, { FunctionComponent } from "react";
import { IInput } from "./IInput";
import clsx from "clsx";
import "./Input.scss";

const Input: FunctionComponent<IInput> = ({
  placeholder,
  className,
  action
}) => {
  return (
    <input
      className={clsx("input", {
        [`${className}`]: className
      })}
      placeholder={placeholder}
      onChange={action}
    ></input>
  );
};

export default Input;
