import React, { FunctionComponent } from "react";
import { ISelect } from "./ISelect";
import clsx from "clsx";
import "./Select.scss";

const Select: FunctionComponent<ISelect> = ({
  className,
  onChange,
  options
}) => {
  return (
    <div className="select__container pos--rel">
      <select
        className={clsx("select p--all-s border--rounded shadow--primary", {
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
