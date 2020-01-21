import { ReactNode } from "react";

export interface ILink {
  children: ReactNode;
  ariaLabel: string;
  target?: string;
  href: string;
  rel?: string;
}
