import Link from "next/link";
import { useRouter } from "next/router";
import { PeopleContext } from "pages/_app";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { StyledButton } from "styles/components";
import {
	PeopleFormContainer,
	PeopleFormFooter,
	PeopleFormHeader,
	PeopleFormMain,
	PeopleFormSelectInput,
	PeopleFormTextInput,
	PeopleFormDateInput,
} from "styles/PeopleForm";
import { COUNTRY_LIST, createUserId } from "utils";

export type TPeopleFormProps = {
	person?: TPeopleAttributes;
};
export const PeopleForm = ({ person }: TPeopleFormProps) => {
	const router = useRouter();
	const [isEditingMode, setIsEditingMode] = useState(false);
	// may or may not have _id
	const [personDetails, setPersonDetails] = useState<TPeopleAttributes>(
		person ?? ({} as TPeopleAttributes),
	);
	const { setPeopleList } = useContext(PeopleContext);

	useEffect(() => {
		if (!!person) setIsEditingMode(true);
	}, []);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement>,
		fieldName: keyof Omit<TPeopleAttributes, "_id">,
	) => {
		const updatedDetails = {
			...personDetails,
			[fieldName]: event.target.value,
		};
		setPersonDetails(updatedDetails);
	};
	const handleSubmit = () => {
		const personDetailsWithId: TPeopleAttributes = {
			...personDetails,
			...(!isEditingMode && { _id: createUserId() }),
		};

		console.log({ personDetailsWithId });
		setPeopleList((prevPeopleList) => {
			if (!isEditingMode) prevPeopleList.push(personDetailsWithId);
			else {
				const index = prevPeopleList.findIndex(
					(info) => info._id === person?._id,
				);
				prevPeopleList.splice(index, 1, personDetailsWithId);
			}

			return prevPeopleList;
		});
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
					<PeopleFormTextInput
						placeholder="e.g. Jane Doe"
						value={personDetails.name ?? ""}
						onChange={(ev) => handleChange(ev, "name")}
					/>
				</PeopleFormInputGroup>
				<PeopleFormInputGroup name="Birthdate" hint="DD/MM/YYYY">
					<PeopleFormDateInput />
				</PeopleFormInputGroup>
				<PeopleFormInputGroup
					name="Job Title"
					hint="What is their role?"
				>
					<PeopleFormTextInput
						placeholder="e.g. Product Manager"
						value={personDetails.jobTitle ?? ""}
						onChange={(ev) => handleChange(ev, "jobTitle")}
					/>
				</PeopleFormInputGroup>
				<PeopleFormInputGroup
					name="Country"
					hint="Where are they based?"
				>
					<PeopleFormSelectInput>
						<option
							value=""
							hidden
							style={{
								color: "var(--color-text-soft)",
							}}
						>
							e.g. Portugal
						</option>
						{COUNTRY_LIST.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</PeopleFormSelectInput>
				</PeopleFormInputGroup>
				<PeopleFormInputGroup name="Salary" hint="Gross yearly salary">
					<PeopleFormTextInput
						placeholder="e.g. 50000"
						value={personDetails.salary ?? ""}
						onChange={(ev) => handleChange(ev, "salary")}
					/>
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
