import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { PeopleList } from "components/PeopleList";
import { StyledButton } from "styles/components";
import { GridContainer, PeopleListActionBar } from "styles/layouts";

const Home = () => {
	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<GridContainer>
				<PeopleListActionBar>
					<div>
						<div>people</div>
						<div>3 employees</div>
					</div>
					<Link href="/update">
						<StyledButton primary dropShadow size="large">
							Add Employee
						</StyledButton>
					</Link>
				</PeopleListActionBar>
				<PeopleList />
			</GridContainer>
		</Fragment>
	);
};

export default Home;
