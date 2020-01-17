import React, { FunctionComponent } from "react";
import { ISelect } from "./ISelect";
import clsx from "clsx";
import "./Select.scss";

const Select: FunctionComponent<ISelect> = ({ options, action, className }) => {
  return (
    <div className="select__container">
      <select
        className={clsx("select", {
          [`${className}`]: className
        })}
        onChange={action}
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
