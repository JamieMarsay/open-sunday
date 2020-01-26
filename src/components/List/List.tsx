import React, { FunctionComponent } from "react";
import { IListBase } from "./IList";
import clsx from "clsx";
import "./List.scss";

export const List: FunctionComponent<IListBase> = ({ children, className }) => (
  <ul
    className={clsx("list", {
      [`${className}`]: className
    })}
  >
    {children}
  </ul>
);

export const ListItem: FunctionComponent<IListBase> = ({
  children,
  className
}) => (
  <li
    className={clsx("list__item", {
      [`${className}`]: className
    })}
  >
    {children}
  </li>
);

export default List;
