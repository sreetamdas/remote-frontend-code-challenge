import React from "react";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	/**
	 * in order to run styled components on SSR apps, ref:
	 *
	 * https://styled-components.com/docs/advanced#server-side-rendering
	 * https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
	 */
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{/* load Inter font (inferred from the figma file shared) */}
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
