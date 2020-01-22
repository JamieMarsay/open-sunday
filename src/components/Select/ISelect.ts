import { ChangeEvent } from "react";

export interface ISelect {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  options: string[];
}
