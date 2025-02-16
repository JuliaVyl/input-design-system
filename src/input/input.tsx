import { forwardRef } from "react";
import { IInput } from "./input.types";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef<HTMLInputElement, IInput>(({ errorMessage, label, labelClassName, ...rest }, ref) => {
	return (
		<div className="flex flex-col w-full">
			{label && (
				<label htmlFor={rest.id} className={twMerge("text-labelM text-content-onNeutral-xxHigh mb-xs font-labelM")}>
					{label}
					{!rest.required && <span className="text-content-onNeutral-low ml-xs text-labelS font-labelS">Optional</span>}
				</label>
			)}
			<input
				ref={ref}
				{...rest}
				className={twMerge(
					"flex items-center px-m h-[48px] box-border",
					"text-[16px] placeholder-content-onNeutral-low bg-surface-xLow text-content-onNeutral-xxHigh font-bodyM",
					"border rounded-input border-surface-xHigh",
					"focus:border-state-default-focus focus:border-[3px] focus-visible:border-state-default-focus focus-visible:border-[3px] focus:outline-none",
					"disabled:opacity-40",
					"caret-surface-brand",
					errorMessage &&
						"focus-visible:border-content-onNeutral-danger border-content-onNeutral-danger caret-surface-danger"
				)}
			/>
			{errorMessage && <span className="mt-xs text-content-onNeutral-danger">{errorMessage}</span>}
		</div>
	);
});

Input.displayName = "Input";
