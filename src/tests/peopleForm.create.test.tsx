import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { PeopleForm } from "components/PeopleForm";
import { customTestingRender, formatDateToYYYYMMDD } from "utils";
// import * as nextRouter from "next/router";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
	__esModule: true,
	useRouter: jest.fn(),
}));

describe("create person", () => {
	test("submit form button works", () => {
		const { getByTestId } = render(<PeopleForm />);
		const submitButton = getByTestId("people-form-submit-button");

		expect(submitButton.textContent).toBe("Add employee");
	});

	test("form calls state (context) update correctly", () => {
		const mockRouter = { push: jest.fn() };
		(useRouter as jest.Mock).mockReturnValue(mockRouter);
		const mockSetPeopleList = jest.fn();
		const personObject: Omit<TPeopleAttributes, "_id"> = {
			country: "Armenia",
			dateOfBirth: new Date("1998-05-21"),
			jobTitle: "Home Maker",
			name: "Test User",
			salary: "40000",
		};

		const { getByTestId } = customTestingRender(<PeopleForm />, {
			peopleList: [],
			setPeopleList: mockSetPeopleList,
		});

		const inputName = getByTestId("people-form-input-name") as HTMLInputElement;
		const inputCountry = getByTestId("people-form-input-country") as HTMLSelectElement;
		const inputJobTitle = getByTestId("people-form-input-jobTitle") as HTMLInputElement;
		const inputSalary = getByTestId("people-form-input-salary") as HTMLInputElement;
		const inputDateOfBirth = getByTestId("people-form-input-dateOfBirth") as HTMLInputElement;
		const submitButton = getByTestId("people-form-submit-button") as HTMLDivElement;

		fireEvent.change(inputName, { target: { value: personObject.name } });
		fireEvent.change(inputCountry, { target: { value: personObject.country } });
		fireEvent.change(inputJobTitle, { target: { value: personObject.jobTitle } });
		fireEvent.change(inputSalary, { target: { value: personObject.salary } });
		fireEvent.change(inputDateOfBirth, {
			target: { value: formatDateToYYYYMMDD(personObject.dateOfBirth) },
		});

		expect(inputName.value).toBe("Test User");
		expect(inputCountry.value).toBe("Armenia");
		expect(inputJobTitle.value).toBe("Home Maker");
		expect(inputSalary.value).toBe("40000");
		expect(inputDateOfBirth.value).toBe("1998-05-21");

		fireEvent.click(submitButton);

		expect(mockSetPeopleList).toHaveBeenCalledWith([expect.objectContaining(personObject)]);
		expect(mockRouter.push).toHaveBeenCalledWith("/");
	});
});
