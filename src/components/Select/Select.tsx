import React, { FunctionComponent } from "react";
import { ISelect } from "./ISelect";

const Select: FunctionComponent<ISelect> = ({ options }) => (
  <select>
    {options.map(option => (
      <option>{option}</option>
    ))}
  </select>
);

export default Select;
