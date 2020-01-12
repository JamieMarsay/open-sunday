import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@Components/Icon/Icon";
import { links } from "./NavLinks";
import "./Navigation.scss";

const Navigation: FunctionComponent = () => (
  <nav className="navigation">
    {links.map(link => (
      <div className="flex flex--centre m--bottom-s">
        <NavLink
          activeClassName="navigation--active"
          className="icon--faint"
          aria-label={link.name}
          to={link.url}
          activeStyle={{
            opacity: 1
          }}
          key={link.name}
        >
          <Icon src={link.icon} alt={link.name} />
        </NavLink>
      </div>
    ))}
  </nav>
);

export default Navigation;
