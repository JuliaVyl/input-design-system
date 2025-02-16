import { InputHTMLAttributes, ReactNode } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	label?: string | ReactNode;
	errorMessage?: string;
	labelClassName?: string;
}
