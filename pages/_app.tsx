import React, { Fragment } from "react";
import { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";
import Head from "next/head";

/**
 * colors:
 * image thumbnail: #ffe8df
 */

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
	}

  	html, body {
		font-size: 18px;
		font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Segoe UI, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		color: var(--color-primary);
		background-color: var(--color-background);
		margin: 0;
		height: 100%;
		min-height: 100%;
	}

	h1, h2, h3 {
		margin: 20px 0 0 0;
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

	code, pre {
		font-family: var(--font-family-code);
	}

	code {
		color: var(--color-inlineCode-fg);
		background-color: var(--color-inlineCode-bg);
		font-size: 85%;
		padding: 0.2em 0.4rem;
		border-radius: 5px;
		/* https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break */
		box-decoration-break: clone;
	}
`;

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
