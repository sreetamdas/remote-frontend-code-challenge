import React from "react";
import "@testing-library/jest-dom";

import { PeopleForm } from "components/PeopleForm";
import { customTestingRender, PEOPLE_LIST_INITIAL } from "utils";

jest.mock("next/router", () => ({
	__esModule: true,
	useRouter: jest.fn(),
}));

const EditPersonPage = <PeopleForm person={PEOPLE_LIST_INITIAL[0]} />;
describe("edit person", () => {
	test("submit form button works", () => {
		const { getByTestId } = customTestingRender(EditPersonPage);
		const submitButton = getByTestId("people-form-submit-button");

		expect(submitButton.textContent).toBe("Save");
	});
});
