import { ReactNode } from "react";

export interface IGrid {
  children: ReactNode;
  vCentre?: boolean;
  cols: number;
}
