import React, { FunctionComponent } from "react";
import "./Input.scss";
import { IInput } from "./IInput";

const Input: FunctionComponent<IInput> = ({ placeholder, options, action }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={action}
      className="input"
    ></input>
  );
};

export default Input;
