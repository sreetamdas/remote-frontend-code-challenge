import React from "react";
import { useRouter } from "next/router";
import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { PeopleForm } from "components/PeopleForm";
import { customTestingRender, formatDateToYYYYMMDD, PEOPLE_LIST_INITIAL } from "utils";

jest.mock("next/router", () => ({
	__esModule: true,
	useRouter: jest.fn(),
}));

const indexOfEditedPerson = 1;
const EditPersonPage = <PeopleForm person={PEOPLE_LIST_INITIAL[indexOfEditedPerson]} />;

describe("edit person", () => {
	test("submit form button works", () => {
		const { getByTestId } = customTestingRender(EditPersonPage);
		const submitButton = getByTestId("people-form-submit-button");

		expect(submitButton.textContent).toBe("Save");
	});

	test("form throws error when submitting with an empty field", async () => {
		const mockRouter = { push: jest.fn() };
		(useRouter as jest.Mock).mockReturnValue(mockRouter);
		const mockSetPeopleList = jest.fn();

		const { getByTestId } = customTestingRender(EditPersonPage, {
			setPeopleList: mockSetPeopleList,
		});

		const inputJobTitle = getByTestId("people-form-input-jobTitle") as HTMLInputElement;
		const submitButton = getByTestId("people-form-submit-button") as HTMLDivElement;

		fireEvent.change(inputJobTitle, { target: { value: "" } });

		expect(inputJobTitle.value).toBe("");
		expect(() => getByTestId("people-form-error-alert")).toThrowError(
			/Unable to find an element by:/,
		);

		fireEvent.click(submitButton);

		expect(getByTestId("people-form-error-alert")).toBeVisible();
	});

	test("form calls state (context) update with updated list", () => {
		const mockRouter = { push: jest.fn() };
		(useRouter as jest.Mock).mockReturnValue(mockRouter);
		const mockSetPeopleList = jest.fn();
		const personObject: Omit<TPeopleAttributes, "_id"> = {
			country: "Armenia",
			dateOfBirth: new Date("1998-05-21"),
			jobTitle: "Home Maker",
			name: "Test User",
			salary: 40000,
		};

		const { getByTestId } = customTestingRender(EditPersonPage, {
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

		expect(inputName.value).toBe(personObject.name);
		expect(inputCountry.value).toBe(personObject.country);
		expect(inputJobTitle.value).toBe(personObject.jobTitle);
		expect(inputSalary.value).toBe(personObject.salary.toString());
		expect(inputDateOfBirth.value).toBe(formatDateToYYYYMMDD(personObject.dateOfBirth));

		fireEvent.click(submitButton);

		const expectedEditedPersonList = [...PEOPLE_LIST_INITIAL];
		expectedEditedPersonList[indexOfEditedPerson] = {
			...expectedEditedPersonList[indexOfEditedPerson],
			...{ ...personObject, salary: personObject.salary.toString() },
		};

		expect(mockSetPeopleList).toHaveBeenCalledWith(expectedEditedPersonList);
		expect(mockRouter.push).toHaveBeenCalledWith("/");
	});
});
