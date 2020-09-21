import { Fragment, useContext } from "react";
import Link from "next/link";

import { StyledButton } from "styles/components";
import {
	PeopleListContainer,
	PeopleListEntryContainer,
	PeopleListHeadingRow,
	PeopleListRowContainer,
} from "styles/layouts";
import { PeopleContext } from "pages/_app";

const LIST_HEADINGS = ["Employee", "Job Title", "Country", "Salary", ""];

export const PeopleList = () => {
	const { peopleList } = useContext(PeopleContext);
	return (
		<PeopleListContainer>
			<PeopleListHeadingRow>
				<PeopleListRowContainer style={{ padding: "15px 0" }}>
					{LIST_HEADINGS.map((heading) => (
						<span key={heading}>{heading}</span>
					))}
				</PeopleListRowContainer>
			</PeopleListHeadingRow>
			{peopleList.map((personInfo) => (
				<PeopleListEntryContainer key={personInfo.name}>
					<PeopleListRowContainer>
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
			<div>
				<span style={{ fontSize: "18px", fontWeight: 600 }}>
					{person.name}
				</span>
				<br />
				<span style={{ fontSize: "14px", fontWeight: 400 }}>
					{new Intl.DateTimeFormat("en-GB").format(
						person.dateOfBirth,
					)}
				</span>
			</div>
			<div>{person.jobTitle}</div>
			<div>{person.country}</div>
			<div>{person.salary}</div>
			<Link href={`update/${person._id}`}>
				<StyledButton>Edit</StyledButton>
			</Link>
		</Fragment>
	);
};
