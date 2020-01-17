import React, { FunctionComponent } from "react";
import { IInput } from "./IInput";
import "./Input.scss";
import clsx from "clsx";

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
