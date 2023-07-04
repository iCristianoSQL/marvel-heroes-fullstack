import { InputHTMLAttributes } from "react";

export interface IStyledTextInput extends InputHTMLAttributes<HTMLInputElement> {
    height?: string;
    width?: string;
    label?: string;
    register?: any;
    className?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}