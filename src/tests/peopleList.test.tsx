import React from "react";
import Home from "pages";
import { customTestingRender, PEOPLE_LIST_INITIAL } from "utils";

describe("renders people list - employee count correctly", () => {
	test("employee count with count 2", () => {
		const { getByTestId } = customTestingRender(<Home />);
		const res = getByTestId("employee-count").textContent;

		expect(res).toBe("2 employees");
	});
	test("employee count with count 1", () => {
		const popped = [...PEOPLE_LIST_INITIAL];
		popped.pop();
		const setPeopleList = jest.fn();
		const { getByTestId } = customTestingRender(<Home />, {
			peopleList: popped,
			setPeopleList,
		});
		const res = getByTestId("employee-count").textContent;

		expect(res).toBe("1 employee");
	});
	test("employee count with count 0", () => {
		const peopleList: Array<TPeopleAttributes> = [];
		const setPeopleList = jest.fn();
		const { getByTestId } = customTestingRender(<Home />, {
			peopleList,
			setPeopleList,
		});
		const res = getByTestId("employee-count").textContent;

		expect(res).toBe("No employees");
	});
});
