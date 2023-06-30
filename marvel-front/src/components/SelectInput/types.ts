import { SelectHTMLAttributes } from "react";

export interface Option {
  value: number | undefined;
  label: string;
}

export interface IStyledSelectInput
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "options"> {
  height?: string;
  width?: string;
  label?: string;
  register: any;
  options: Option[];
}
