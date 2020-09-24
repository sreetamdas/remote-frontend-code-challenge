import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { ReallyBigTitle } from "styles/components";
import { GridContainer } from "styles/layouts";

export const Custom404 = () => {
	return (
		<Fragment>
			<Head>
				<title>Error 404</title>
			</Head>
			<GridContainer>
				<ReallyBigTitle>404!</ReallyBigTitle>
				<h1 data-testid="404-error-page">Page not found</h1>
				<Link href="/">Go back home</Link>
			</GridContainer>
		</Fragment>
	);
};

export default Custom404;
