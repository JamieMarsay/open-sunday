import React, { FunctionComponent } from "react";
import { IInput } from "./IInput";
import clsx from "clsx";
import "./Input.scss";

const Input: FunctionComponent<IInput> = ({
  placeholder,
  className,
  intent,
  action
}) => {
  return (
    <input
      className={clsx("input p--all-s shadow--primary border--rounded", {
        [`${className}`]: className,
        [`${intent}`]: intent
      })}
      placeholder={placeholder}
      onChange={action}
    ></input>
  );
};

export default Input;
