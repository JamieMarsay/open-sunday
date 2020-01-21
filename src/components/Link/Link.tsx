import React, { FunctionComponent } from "react";
import { ILink } from "./ILink";
import "./Link.scss";
import clsx from "clsx";

const Link: FunctionComponent<ILink> = ({
  ariaLabel,
  className,
  children,
  target,
  href,
  rel
}) => (
  <a
    className={clsx("link", {
      [`${className}`]: className
    })}
    aria-label={ariaLabel}
    target={target}
    href={href}
    rel={rel}
  >
    {children}
  </a>
);

export default Link;
