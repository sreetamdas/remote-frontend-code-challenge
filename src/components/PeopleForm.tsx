import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PeopleContext } from "pages/_app";
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
import { COUNTRY_LIST, createUserId, formatDateToYYYYMMDD } from "utils";

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
	const { peopleList, setPeopleList } = useContext(PeopleContext);

	useEffect(() => {
		if (!!person) {
			setIsEditingMode(true);
			setPersonDetails(person);
		}
	}, [person]);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		fieldName: keyof Omit<TPeopleAttributes, "_id">,
	) => {
		let value: any = event.target.value;
		if (fieldName === "dateOfBirth") {
			value = new Date(value);
		}
		const updatedDetails = {
			...personDetails,
			[fieldName]: value,
		};
		setPersonDetails(updatedDetails);
	};
	const handleSubmit = () => {
		const personDetailsWithId: TPeopleAttributes = {
			...personDetails,
			...(!isEditingMode && { _id: createUserId() }),
		};
		const updatedList = [...peopleList];
		if (!isEditingMode) updatedList.push(personDetailsWithId);
		else {
			const index = updatedList.findIndex((info) => info._id === person?._id);
			updatedList.splice(index, 1, personDetailsWithId);
		}

		setPeopleList(updatedList);
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
						data-testid="people-form-input-name"
					/>
				</PeopleFormInputGroup>
				<PeopleFormInputGroup name="Birthdate" hint="DD/MM/YYYY">
					<PeopleFormDateInput
						value={formatDateToYYYYMMDD(personDetails.dateOfBirth)}
						onChange={(ev) => handleChange(ev, "dateOfBirth")}
						max={formatDateToYYYYMMDD(new Date())}
						style={{
							color: personDetails.dateOfBirth
								? "var(--color-text-main)"
								: "var(--color-text-soft)",
						}}
						data-testid="people-form-input-dateOfBirth"
					/>
				</PeopleFormInputGroup>
				<PeopleFormInputGroup name="Job Title" hint="What is their role?">
					<PeopleFormTextInput
						placeholder="e.g. Product Manager"
						value={personDetails.jobTitle ?? ""}
						onChange={(ev) => handleChange(ev, "jobTitle")}
						data-testid="people-form-input-jobTitle"
					/>
				</PeopleFormInputGroup>
				<PeopleFormInputGroup name="Country" hint="Where are they based?">
					<PeopleFormSelectInput
						value={personDetails.country}
						onChange={(ev) => handleChange(ev, "country")}
						style={{
							color: personDetails.country
								? "var(--color-text-main)"
								: "var(--color-text-soft)",
						}}
						data-testid="people-form-input-country"
					>
						{!personDetails.country ? (
							<option
								value=""
								hidden
								style={{
									color: "var(--color-text-soft)",
								}}
							>
								e.g. Portugal
							</option>
						) : null}
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
						data-testid="people-form-input-salary"
					/>
				</PeopleFormInputGroup>
			</PeopleFormMain>
			<PeopleFormFooter>
				<Link href="/">
					<StyledButton
						onClick={() => router.push("/")}
						data-testid="people-form-cancel-button"
					>
						Cancel
					</StyledButton>
				</Link>
				<StyledButton
					primary
					onClick={handleSubmit}
					data-testid="people-form-submit-button"
				>
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
const PeopleFormInputGroup = ({ name, hint, children }: TInputFormGroupProps) => {
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
