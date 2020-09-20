import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "styles/components";
import {
	PeopleFormContainer,
	PeopleFormFooter,
	PeopleFormHeader,
	PeopleFormMain,
	PeopleFormTextInput,
} from "styles/PeopleForm";

export type TPeopleFormProps = {
	person?: TPeopleAttributes;
};
export const PeopleForm = ({ person }: TPeopleFormProps) => {
	const [isEditingMode, setIsEditingMode] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (!!person) setIsEditingMode(true);
	}, []);

	const handleSubmit = () => {
		router.push("/");
	};

	return (
		<PeopleFormContainer>
			<PeopleFormHeader>
				{isEditingMode ? "Edit employee" : "Add a new employee"}
				<br />
				<span
					style={{
						color: "var(--color-text-soft)",
						fontSize: "14px",
						fontWeight: 300,
						paddingTop: "6px",
					}}
				>
					{isEditingMode
						? "Edit the information of your employee."
						: "Fill out the information of your new employee."}
				</span>
			</PeopleFormHeader>
			<PeopleFormMain>
				<PeopleFormInputGroup name="Name" hint="First and last names">
					<PeopleFormTextInput placeholder="e.g. Jane Doe" />
				</PeopleFormInputGroup>
			</PeopleFormMain>
			<PeopleFormFooter>
				<Link href="/">
					<StyledButton>Cancel</StyledButton>
				</Link>
				<StyledButton primary onClick={handleSubmit}>
					{isEditingMode ? "Save" : "Add employee"}
				</StyledButton>
			</PeopleFormFooter>
		</PeopleFormContainer>
	);
};

type TInputFormGroupProps = {
	name: string;
	children: JSX.Element;
	hint: string;
};
const PeopleFormInputGroup = ({
	name,
	hint,
	children,
}: TInputFormGroupProps) => {
	return (
		<div style={{ fontSize: "13px", color: "var(--color-text-softer)" }}>
			<FormCaptureFocus>
				<label>
					{name}
					<br />
					{children}
				</label>
			</FormCaptureFocus>
			<div
				style={{
					color: "var(--color-text-main)",
					opacity: "50%",
					paddingTop: "8px",
				}}
			>
				{hint}
			</div>
		</div>
	);
};

const FormCaptureFocus = styled.div`
	&:focus-within {
		color: var(--color-primary-accent);
	}
`;
