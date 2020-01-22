import { ReactNode } from "react";

export interface ILink {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
  target?: string;
  href: string;
  rel?: string;
}
