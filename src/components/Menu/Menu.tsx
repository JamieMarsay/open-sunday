import React, { FunctionComponent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import { List, ListItem } from "@Components/List/List";
import { isDesktop } from "@Utils/constants";
import searchIcon from "@Assets/search.svg";
import Link from "@Components/Link/Link";
import Icon from "@Components/Icon/Icon";
import menuIcon from "@Assets/menu.svg";
import { IMenu } from "./IMenu";
import clsx from "clsx";
import "./Menu.scss";

const Menu: FunctionComponent<IMenu> = ({ items, title }) => {
  const [open, toggleOpen] = useState(isDesktop && items.length > 0);

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
            children={items.map((item: any, index) => (
              <ListItem
                className="menu__item m--right-s"
                key={item.name + index}
              >
                <Link
                  href={item?.website || item.url}
                  ariaLabel={item.name}
                  children={item.name}
                  className="p--all-s"
                  target="_blank"
                  rel="noopener"
                />
                <Link
                  ariaLabel={`Phone number: ${item.formatted_phone_number}`}
                  children={`Phone: ${item.formatted_phone_number}`}
                  href={`tel:${item.formatted_phone_number}`}
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
