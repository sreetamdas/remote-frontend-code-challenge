import React from "react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import { customTestingRender } from "utils";
import UpdateRecord from "pages/update/[id]";

jest.mock("next/router", () => ({
	__esModule: true,
	useRouter: jest.fn(),
}));

describe("404 page", () => {
	test("shows 404 page when person does not exist", () => {
		const mockRouter = { query: { id: "123_id_doesnt_exist" } };
		(useRouter as jest.Mock).mockReturnValue(mockRouter);

		const { getByTestId, getByText } = customTestingRender(<UpdateRecord />);
		expect(getByTestId("404-error-page")).toBeVisible();
		expect(getByText(/404!/)).toBeVisible();
	});

	test("doesn't show 404 page when person does exist", () => {
		const mockRouter = { query: { id: "asd001" } };
		(useRouter as jest.Mock).mockReturnValue(mockRouter);

		const { getByTestId } = customTestingRender(<UpdateRecord />);
		expect(() => getByTestId("404-error-page")).toThrowError();
	});
});
