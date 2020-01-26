import React, { FunctionComponent } from "react";
import "./Buttons.scss";
import clsx from "clsx";

export interface IButtonBase {
  className?: string;
  text: string;
}

export interface IButton extends IButtonBase {
  action: () => void;
}

export const Button: FunctionComponent<IButton> = ({
  className,
  action,
  text
}) => (
  <button
    className={clsx("button", {
      [`${className}`]: className
    })}
    onClick={() => action()}
  >
    {text}
  </button>
);

export interface IAnchorButton extends IButtonBase {
  href: string;
}

export const AnchorButton: FunctionComponent<IAnchorButton> = ({
  className,
  text,
  href
}) => (
  <a
    className={clsx("button button--link", {
      [`${className}`]: className
    })}
    href={href}
  >
    {text}
  </a>
);
