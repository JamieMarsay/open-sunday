import { ChangeEvent } from "react";
export interface IInput {
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  intent?: boolean | "error";
}
