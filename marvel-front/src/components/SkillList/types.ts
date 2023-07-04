import { HTMLAttributes } from "react";
export interface ISkillList extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    onSelect: (skill: any) => void;
}