import { PeopleList } from "components/PeopleList";
import Head from "next/head";
import { Fragment } from "react";
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
					<StyledButton primary dropShadow size="large">
						Add Employee
					</StyledButton>
				</PeopleListActionBar>
				<PeopleList />
			</GridContainer>
		</Fragment>
	);
};

export default Home;
