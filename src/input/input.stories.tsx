import { ReactElement } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";
import { useForm } from "react-hook-form";

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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...args}
				{...register("requiredField", {
					required: "This field is required",
					minLength: {
						value: 2,
						message: "Minimum length is 2 characters",
					},
				})}
				errorMessage={errors.requiredField?.message as string}
			/>
			<button type="submit" style={{ marginTop: "10px" }}>
				Submit
			</button>
		</form>
	);
};

Required.args = {
	label: "Required",
	disabled: false,
	required: true,
	placeholder: "Placeholder",
};

export const Email: StoryFn<typeof Input> = (args): ReactElement => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...args}
				{...register("requiredField", {
					required: "This field is required",
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Invalid email address",
					},
				})}
				errorMessage={errors.requiredField?.message as string}
			/>
			<button type="submit" style={{ marginTop: "10px" }}>
				Submit
			</button>
		</form>
	);
};

Email.args = {
	label: "Email",
	disabled: false,
	required: true,
	placeholder: "example@email.com",
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
