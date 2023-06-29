import { HTMLAttributes } from "react";
import { ISkills } from "../../utils/@types";

export interface ISkillList extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    onSelect: (skill: any) => void;
}