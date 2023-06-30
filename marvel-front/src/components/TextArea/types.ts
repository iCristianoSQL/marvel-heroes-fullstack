import { TextareaHTMLAttributes, ChangeEvent } from "react";
export interface ITextAreaStyle extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    width?: string;
    height?: string;
}
export interface ITextAreaProps extends ITextAreaStyle {
    label?: string;
    handleChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    register?: any;
}