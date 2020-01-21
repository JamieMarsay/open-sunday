import React, { FunctionComponent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import { List, ListItem } from "@Components/List/List";
import Link from "@Components/Link/Link";
import Icon from "@Components/Icon/Icon";
import menuIcon from "@Assets/menu.svg";
import searchIcon from "@Assets/search.svg";
import { IMenu } from "./IMenu";
import "./Menu.scss";
import clsx from "clsx";
import Grid from "@Components/Grid/Grid";
import { AnchorButton } from "@Components/Buttons/Buttons";

const Menu: FunctionComponent<IMenu> = ({ items, title }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <header className="menu slide--left">
      <div className="menu__inner">
        <div className={"flex flex--v-centre flex--between"}>
          <Typography className="menu__title" text={title} variant="h2" />
          <span className="flex flex--end">
            <Link
              className="menu__icon m--right-md"
              ariaLabel="New Search"
              href="/home"
            >
              <Icon src={searchIcon} alt="Search" />
            </Link>
            <Icon
              action={() => toggleOpen(!open)}
              className="menu__icon"
              src={menuIcon}
              alt="Menu"
            />
          </span>
        </div>
        <nav
          className={clsx("menu__nav", {
            "menu__nav--open": open
          })}
        >
          <List
            children={items.map((item: any) => (
              <ListItem key={item.name} className="menu__item">
                <Link
                  href="https://google.com"
                  ariaLabel={item.name}
                  children={item.name}
                  className="p--all-s"
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
