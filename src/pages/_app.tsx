import React, {
	createContext,
	Dispatch,
	Fragment,
	SetStateAction,
	useState,
} from "react";
import { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { PEOPLE_LIST_INITIAL } from "utils";
import { Header } from "styles/layouts";

const GlobalStyles = createGlobalStyle`
	:root {
		--color-primary-accent: #624de3;
		--color-primary-accent-faded: #624de34d;
		--color-primary: #000;
		--color-background: #f4f7fc;
		--color-inlineCode-fg: #EB5757;
		--color-inlineCode-bg: #eee;
		--color-secondary-accent: #61DAFB;
		--header-bg-color: #FFF;
		--font-family-code: SFMono-Regular, Consolas, Roboto Mono, Menlo, Monaco, Liberation Mono, Lucida Console, monospace;

		--color-text-soft: #525F7F;
		--color-text-softer: #778CA3;
		--color-text-main: #00234B;

	}

  	html, body {
		font-size: 18px;
		font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Segoe UI, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		color: var(--color-text-main);
		background-color: var(--color-background);
		margin: 0;
		height: 100%;
		min-height: 100%;
	}

	a {
	text-decoration: none;
	color: var(--color-primary-accent);
	cursor: pointer;

		&:visited {
			text-decoration: none;
		}
		&:hover {
			text-decoration: underline;
		}
	}

	p {
		margin: 0;
	}
`;

export type TPeopleContext = {
	peopleList: Array<TPeopleAttributes>;
	setPeopleList: Dispatch<SetStateAction<Array<TPeopleAttributes>>>;
};
export const PeopleContext = createContext<TPeopleContext>(
	{} as TPeopleContext,
);

const App = ({ Component, pageProps }: AppProps) => {
	const [peopleList, setPeopleList] = useState<Array<TPeopleAttributes>>(
		process.env.NODE_ENV === "production" ? [] : PEOPLE_LIST_INITIAL,
	);

	return (
		<Fragment>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<GlobalStyles />
			<PeopleContext.Provider value={{ peopleList, setPeopleList }}>
				<Header>
					<div
						style={{
							fontSize: "16px",
							color: "var(--color-text-main)",
							display: "inline-block",
						}}
					>
						<span
							style={{
								background: "#FFE8DF",
								borderRadius: "50%",
								display: "inline-block",
								height: "36px",
								width: "36px",
								verticalAlign: "middle",
							}}
						/>
						<div
							style={{
								display: "inline-block",
								verticalAlign: "middle",
								paddingLeft: "13px",
							}}
						>
							Julie Howard
							<br />
							<div
								style={{
									fontSize: "13px",
									color: "var(--color-text-softer)",
									paddingTop: "2px",
								}}
							>
								Admin
							</div>
						</div>
					</div>
				</Header>
				<Component {...pageProps} />
			</PeopleContext.Provider>
		</Fragment>
	);
};

export default App;
