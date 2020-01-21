import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import { List, ListItem } from "@Components/List/List";
import Link from "@Components/Link/Link";
import { IMenu } from "./IMenu";
import "./Menu.scss";

const Menu: FunctionComponent<IMenu> = ({ items, title }) => (
  <div className="menu">
    <Typography text={title} variant="h2" className="menu__title" />
    <List
      children={items.map((item: any) => (
        <ListItem key={item.name} className="menu__item">
          <Link
            href="https://google.com"
            ariaLabel={item.name}
            children={item.name}
            target="_blank"
            rel="noopener"
          />
        </ListItem>
      ))}
    />
  </div>
);

export default Menu;
