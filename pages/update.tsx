import Head from "next/head";
import { Fragment } from "react";
import { GridContainer, Header } from "styles/layouts";

const Update = () => {
	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<Header>header</Header>
			<GridContainer>
				<h1>Hello there!</h1>
			</GridContainer>
		</Fragment>
	);
};

export default Update;
