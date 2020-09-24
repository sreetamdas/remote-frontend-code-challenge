import React, { Fragment, useContext } from "react";
import Head from "next/head";
import Link from "next/link";

import { PeopleList } from "components/PeopleList";
import { StyledButton } from "styles/components";
import { GridContainer, PeopleListActionBar } from "styles/layouts";
import { PeopleContext } from "pages/_app";

const Home = () => {
	const { peopleList } = useContext(PeopleContext);

	return (
		<Fragment>
			<Head>
				<title>People List</title>
			</Head>
			<GridContainer>
				<PeopleListActionBar>
					<div style={{ fontSize: "26px" }}>
						People
						<span
							style={{
								fontSize: "13px",
								color: "var(--color-text-softer)",
								paddingLeft: "8px",
							}}
							data-testid="employee-count"
						>
							{peopleList.length
								? `${peopleList.length} ${
										peopleList.length === 1 ? "employee" : "employees"
								  }`
								: "No employees"}
						</span>
					</div>
					<Link href="/update">
						<StyledButton
							primary
							dropShadow
							size="large"
							style={{
								display: "grid",
								gridTemplateColumns: "max-content 1fr",
								alignContent: "center",
								gridGap: "10px",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
							Add employee
						</StyledButton>
					</Link>
				</PeopleListActionBar>
				{peopleList.length ? (
					<PeopleList />
				) : (
					<div
						style={{ color: "var(--color-text-soft)" }}
						data-testid="no-data-available"
					>
						No data available
					</div>
				)}
			</GridContainer>
		</Fragment>
	);
};

export default Home;
