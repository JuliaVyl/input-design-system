import { ReactElement } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Input",
	argTypes: {
		disabled: {
			control: "boolean",
		},
		required: {
			control: "boolean",
		},
		errorMessage: {
			control: "text",
		},
	},
};
export default meta;

export const Main: StoryFn<typeof Input> = (args): ReactElement => {
	return <Input {...args} />;
};
Main.args = {
	label: "Input",
	disabled: false,
	required: false,
	placeholder: "Placeholder",
};

export const Required: StoryFn<typeof Input> = (args): ReactElement => {
	return <Input {...args} />;
};
Required.args = {
	label: "Required",
	disabled: false,
	required: true,
	placeholder: "Placeholder",
};

export const WithError: StoryFn<typeof Input> = (args): ReactElement => {
	return <Input {...args} />;
};
WithError.args = {
	label: "WithError",
	errorMessage: "Error message",
	disabled: false,
	required: false,
	placeholder: "Placeholder",
};

export const Disabled: StoryFn<typeof Input> = (args): ReactElement => {
	return <Input {...args} />;
};
Disabled.args = {
	label: "Disabled",
	disabled: true,
	required: false,
	placeholder: "Placeholder",
};
