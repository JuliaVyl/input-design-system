import { cva } from "class-variance-authority";
import { clsx } from "../utils";

const inputVariants = cva(["text-white-100", "px-2", "rounded-md", "border", "border-solid", "text-base"], {
	variants: {},
	compoundVariants: [],
	defaultVariants: {
		variant: "primary",
		size: "s",
	},
});

export const inputStyle = (variants: Parameters<typeof inputVariants>[0]) => clsx(inputVariants(variants));
