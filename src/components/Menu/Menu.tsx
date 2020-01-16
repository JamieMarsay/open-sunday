import React, { FunctionComponent } from "react";
import { IMenu } from "./IMenu";
import "./Menu.scss";

const Menu: FunctionComponent<IMenu> = ({ items, type }) => (
  <div className="menu">
    <h2 className="menu__title">{`${items.length} ${
      items.length > 1 ? `${type}s` : type
    } found!`}</h2>
    {items.map((item: any) => (
      <p>{item.name}</p>
    ))}
  </div>
);

export default Menu;
