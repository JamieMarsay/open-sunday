import React, { FunctionComponent } from "react";
import { toolBarItems } from "./ToolbarItems";
import Link from "@Components/Link/Link";
import Icon from "@Components/Icon/Icon";
import "./Toolbar.scss";

const Toolbar: FunctionComponent = () => (
  <div className="toolbar slide--right">
    {toolBarItems.map(item => (
      <Link href={item.href} className="toolbar__item" ariaLabel={item.name}>
        <Icon src={item.icon} alt={item.name} />
      </Link>
    ))}
  </div>
);

export default Toolbar;
