import React, { FunctionComponent } from "react";
import { ISelect } from "./ISelect";
import clsx from "clsx";
import "./Select.scss";

const Select: FunctionComponent<ISelect> = ({
  options,
  onChange,
  className
}) => {
  return (
    <div className="select__container">
      <select
        className={clsx("select", {
          [`${className}`]: className
        })}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
