import { PeopleList } from "components/PeopleList";
import Head from "next/head";
import { Fragment, useState } from "react";
import { StyledButton } from "styles/components";
import { GridContainer, Header, PeopleListActionBar } from "styles/layouts";

const peopleListInitial: Array<TPeopleAttributes> = [
	{
		name: "Sreetam Das",
		country: "India",
		dateOfBirth: new Date(),
		jobTitle: "developer",
		salary: 5000,
	},
	{
		name: "Areena Arora",
		country: "India",
		dateOfBirth: new Date(),
		jobTitle: "journalist",
		salary: 7777,
	},
];

const Home = () => {
	const [peopleList] = useState<Array<TPeopleAttributes>>(peopleListInitial);
	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<Header>header</Header>
			<GridContainer>
				<PeopleListActionBar>
					<div>
						<div>people</div>
						<div>3 employees</div>
					</div>
					<StyledButton primary dropShadow size="large">
						Add Employee
					</StyledButton>
				</PeopleListActionBar>
				<PeopleList {...{ peopleList }} />
			</GridContainer>
		</Fragment>
	);
};

export default Home;
