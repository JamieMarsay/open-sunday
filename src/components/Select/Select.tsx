import React, { FunctionComponent, useState } from "react";
import { ISelect } from "./ISelect";

const Select: FunctionComponent<ISelect> = ({ options, action }) => {
  return (
    <select onChange={action}>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
