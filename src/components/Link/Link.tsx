import React, { FunctionComponent } from "react";
import { ILink } from "./ILink";
import "./Link.scss";

const Link: FunctionComponent<ILink> = ({
  ariaLabel,
  children,
  target,
  href,
  rel
}) => (
  <a
    aria-label={ariaLabel}
    className="link"
    target={target}
    href={href}
    rel={rel}
  >
    {children}
  </a>
);

export default Link;
