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
    <header className="menu slide--left border--rounded p--all-md shadow--primary">
      <div className="menu__inner">
        <div className="flex flex--v-centre flex--between">
          <Typography text={title} variant="h2" />
          <span className="flex flex--end">
            <Link className="menu__icon" ariaLabel="New Search" href="/home">
              <Icon src={searchIcon} alt="Search" />
            </Link>
            <Icon
              className="menu__icon interactable"
              action={() => toggleOpen(!open)}
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
                className="m--right-s m--bottom-md"
                key={item.name + index}
              >
                <Typography
                  className="m--bottom-s"
                  text={item.name}
                  variant="h3"
                />
                <div className="flex flex--v-centre">
                  <Link
                    href={item?.website || item.url}
                    children={
                      item.website ? "Visit website" : "View on Google Maps"
                    }
                    ariaLabel={item.name}
                    className="m--bottom-s"
                  />
                </div>
                {item.formatted_phone_number ? (
                  <Link
                    ariaLabel={`Phone number: ${item.formatted_phone_number}`}
                    children={`Phone: ${item.formatted_phone_number}`}
                    href={`tel:${item.formatted_phone_number}`}
                  />
                ) : (
                  <Typography text="No phone number found" />
                )}
              </ListItem>
            ))}
          />
        </nav>
      </div>
    </header>
  );
};

export default Menu;
