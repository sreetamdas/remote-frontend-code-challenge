import { Fragment } from "react";
import Head from "next/head";

import { GridContainer, Header } from "styles/layouts";

const AddRecord = () => {
	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<Header>header</Header>
			<GridContainer>
				<h1>Add a record</h1>
			</GridContainer>
		</Fragment>
	);
};

export default AddRecord;
