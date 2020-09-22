import React, { Fragment, useContext } from "react";
import Link from "next/link";

import { StyledButton } from "styles/components";
import {
	PeopleListContainer,
	PeopleListEntryContainer,
	PeopleListHeadingRow,
	PeopleListRowContainer,
} from "styles/layouts";
import { PeopleContext } from "pages/_app";
import { formatDateToDDMMYYYY, formatSalaryToLocaleString } from "utils";

const LIST_HEADINGS = ["Employee", "Job Title", "Country", "Salary", ""];

export const PeopleList = () => {
	const { peopleList } = useContext(PeopleContext);
	return (
		<PeopleListContainer>
			<PeopleListHeadingRow>
				<PeopleListRowContainer style={{ padding: "10px 0" }}>
					{LIST_HEADINGS.map((heading) => (
						<span key={heading}>{heading}</span>
					))}
				</PeopleListRowContainer>
			</PeopleListHeadingRow>
			{peopleList.map((personInfo) => (
				<PeopleListEntryContainer key={personInfo._id}>
					<PeopleListRowContainer
						style={{
							color: "var(--color-text-soft)",
							fontSize: "16px",
							fontWeight: 300,
							alignItems: "center",
						}}
					>
						<PeopleListEntry person={personInfo} />
					</PeopleListRowContainer>
				</PeopleListEntryContainer>
			))}
		</PeopleListContainer>
	);
};

type TPersonEntry = { person: TPeopleAttributes };
const PeopleListEntry = ({ person }: TPersonEntry) => {
	return (
		<Fragment>
			<p>
				<span
					style={{
						fontSize: "18px",
						fontWeight: 600,
						color: "var(--color-text-main)",
					}}
				>
					{person.name}
				</span>
				<br />
				<span
					style={{
						fontSize: "14px",
						fontWeight: 300,
						color: "var(--color-text-softer)",
					}}
				>
					{formatDateToDDMMYYYY(person.dateOfBirth)}
				</span>
			</p>
			<p>{person.jobTitle}</p>
			<p>{person.country}</p>
			<p
				style={{
					fontWeight: 500,
				}}
			>
				{formatSalaryToLocaleString(person.salary)} USD
				<span
					style={{
						fontSize: "13px",
						color: "var(--color-text-softer)",
						paddingLeft: "4px",
						fontWeight: 300,
					}}
				>
					per year
				</span>
			</p>
			<Link href={`update/${person._id}`}>
				<StyledButton>Edit</StyledButton>
			</Link>
		</Fragment>
	);
};
