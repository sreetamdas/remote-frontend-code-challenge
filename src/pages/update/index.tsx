import React, { Fragment } from "react";
import Head from "next/head";

import { GridContainer } from "styles/layouts";
import { PeopleForm } from "components/PeopleForm";

const AddRecord = () => {
	return (
		<Fragment>
			<Head>
				<title>Add person</title>
			</Head>
			<GridContainer>
				<PeopleForm />
			</GridContainer>
		</Fragment>
	);
};

export default AddRecord;
