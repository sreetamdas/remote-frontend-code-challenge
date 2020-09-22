import React, { Fragment } from "react";
import Head from "next/head";

import { GridContainer } from "styles/layouts";
import { PeopleForm } from "components/PeopleForm";

const AddRecord = () => {
	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<GridContainer>
				<PeopleForm />
			</GridContainer>
		</Fragment>
	);
};

export default AddRecord;
