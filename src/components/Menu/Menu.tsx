import React from "react";
import "./Menu.scss";

const Menu = ({ items, type }) => (
  <div className="menu">
    <h2 className="menu__title">{`${items.length} ${
      items.length > 1 ? `${type}s` : type
    } found!`}</h2>
    {items.map(item => (
      <p>{item.name}</p>
    ))}
  </div>
);

export default Menu;
