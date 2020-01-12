import { ReactNode } from "react";

export interface IProvider {
  children: ReactNode;
  urls: string[];
}
