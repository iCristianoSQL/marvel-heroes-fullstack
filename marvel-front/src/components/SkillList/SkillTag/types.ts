import { HTMLAttributes, ReactNode } from "react";

export interface ISkillTag extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  description: string;
  tooltipId: string;
  color: string;
}