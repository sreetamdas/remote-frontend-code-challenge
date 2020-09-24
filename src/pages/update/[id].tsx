import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { GridContainer } from "styles/layouts";
import { PeopleForm } from "components/PeopleForm";
import { PeopleContext } from "pages/_app";
import Custom404 from "pages/404";

const UpdateRecord = () => {
	const router = useRouter();
	const { id } = router.query;
	const { peopleList } = useContext(PeopleContext);
	const [currentPerson, setCurrentPerson] = useState<TPeopleAttributes>();

	useEffect(() => {
		const person = peopleList.find((person) => person._id === id);
		if (person !== undefined) setCurrentPerson(person);
	}, [id]);

	/**
	 * if the person doesn't exist, we show the 404 error page;
	 * this would happen when the user enters the wrong URL
	 */
	return currentPerson ? (
		<Fragment>
			<Head>
				<title>Edit person</title>
			</Head>

			<GridContainer>
				<PeopleForm person={currentPerson} />
			</GridContainer>
		</Fragment>
	) : (
		<Custom404 />
	);
};

export default UpdateRecord;
