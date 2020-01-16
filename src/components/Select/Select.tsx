import React, { FunctionComponent } from "react";
import { ISelect } from "./ISelect";
import "./Select.scss";

const Select: FunctionComponent<ISelect> = ({ options, action }) => {
  return (
    <select className="select" onChange={action}>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
