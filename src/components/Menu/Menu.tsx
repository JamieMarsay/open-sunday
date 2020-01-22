import React, { FunctionComponent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import { List, ListItem } from "@Components/List/List";
import { isDestkop } from "@Utils/constants";
import searchIcon from "@Assets/search.svg";
import Link from "@Components/Link/Link";
import Icon from "@Components/Icon/Icon";
import menuIcon from "@Assets/menu.svg";
import { IMenu } from "./IMenu";
import clsx from "clsx";
import "./Menu.scss";

const Menu: FunctionComponent<IMenu> = ({ items, title }) => {
  const [open, toggleOpen] = useState(isDestkop && items.length > 0);

  return (
    <header className="menu slide--left">
      <div className="menu__inner">
        <div className="flex flex--v-centre flex--between">
          <Typography text={title} variant="h2" />
          <span className="flex flex--end">
            <Link className="menu__icon" ariaLabel="New Search" href="/home">
              <Icon src={searchIcon} alt="Search" />
            </Link>
            <Icon
              action={() => toggleOpen(!open)}
              className="menu__icon interactable"
              src={menuIcon}
              alt="Menu"
            />
          </span>
        </div>
        <nav
          className={clsx("menu__nav", {
            "menu__nav--open m--top-md": open
          })}
        >
          <List
            children={items.map((item: any) => (
              <ListItem key={item.name} className="menu__item m--right-s">
                <Link
                  href="https://google.com"
                  ariaLabel={item.name}
                  children={item.name}
                  className="p--all-s"
                  target="_blank"
                  rel="noopener"
                />
              </ListItem>
            ))}
          />
        </nav>
      </div>
    </header>
  );
};

export default Menu;
