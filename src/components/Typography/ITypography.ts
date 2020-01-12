import { ElementType } from "react";

export interface ITypography {
  text: string | number;
  variant?: ElementType;
  capitalise?: boolean;
  bold?: boolean;
}
