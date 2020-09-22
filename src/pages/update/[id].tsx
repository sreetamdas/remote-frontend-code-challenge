import { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { GridContainer } from "styles/layouts";
import { PeopleContext } from "pages/_app";
import { PeopleForm } from "components/PeopleForm";

const UpdateRecord = () => {
	const router = useRouter();
	const { id } = router.query;
	const { peopleList } = useContext(PeopleContext);
	const [currentPerson, setCurrentPerson] = useState(
		peopleList.find((person) => person._id === id),
	);

	useEffect(() => {
		setCurrentPerson(peopleList.find((person) => person._id === id));
	}, [id]);

	return (
		<Fragment>
			<Head>
				<title>Edit Person</title>
			</Head>

			<GridContainer>
				<PeopleForm person={currentPerson} />
			</GridContainer>
		</Fragment>
	);
};

export default UpdateRecord;
