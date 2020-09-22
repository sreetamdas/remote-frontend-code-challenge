import { Fragment, useContext } from "react";
import Head from "next/head";
import Link from "next/link";

import { PeopleList } from "components/PeopleList";
import { StyledButton } from "styles/components";
import { GridContainer, PeopleListActionBar } from "styles/layouts";
import { PeopleContext } from "pages/_app";

const Home = () => {
	const { peopleList } = useContext(PeopleContext);

	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<GridContainer>
				<PeopleListActionBar>
					<div style={{ fontSize: "26px" }}>
						People
						<span
							style={{
								fontSize: "13px",
								color: "var(--color-text-softer)",
								paddingLeft: "8px",
							}}
						>
							{peopleList.length
								? `${peopleList.length} ${
										peopleList.length === 1
											? "employee"
											: "employees"
								  }`
								: "No employees"}
						</span>
					</div>
					<Link href="/update">
						<StyledButton primary dropShadow size="large">
							Add Employee
						</StyledButton>
					</Link>
				</PeopleListActionBar>
				{peopleList.length ? (
					<PeopleList />
				) : (
					<div style={{ color: "var(--color-text-soft)" }}>
						No data available yet!
					</div>
				)}
			</GridContainer>
		</Fragment>
	);
};

export default Home;
