import { Fragment, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { GridContainer, Header } from "styles/layouts";
import { PeopleContext } from "pages/_app";
import { PeopleForm } from "components/PeopleForm";

const UpdateRecord = () => {
	const router = useRouter();
	const { id } = router.query;
	const { peopleList } = useContext(PeopleContext);

	const currentPerson = peopleList.find((person) => person._id === id);

	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<Header>header</Header>
			<GridContainer>
				<PeopleForm person={currentPerson} />
			</GridContainer>
		</Fragment>
	);
};

export default UpdateRecord;
