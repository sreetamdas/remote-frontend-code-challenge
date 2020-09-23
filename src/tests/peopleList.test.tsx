import React from "react";
import Home from "pages";
import { customTestingRender, PEOPLE_LIST_INITIAL } from "utils";

describe("renders people list - employee count correctly", () => {
	test("employee count is correct with count 2", () => {
		try {
			const { getByTestId } = customTestingRender(<Home />);
			const res = getByTestId("employee-count").textContent;

			expect(res).toBe("2 employees");
		} catch (error) {
			console.log(error);
		}
	});
	test("employee count is correct with count 1", () => {
		try {
			const popped = [...PEOPLE_LIST_INITIAL];
			popped.pop();
			const setPeopleList = jest.fn();
			const { getByTestId } = customTestingRender(<Home />, {
				peopleList: popped,
				setPeopleList,
			});
			const res = getByTestId("employee-count").textContent;

			expect(res).toBe("1 employee");
		} catch (error) {
			console.log(error);
		}
	});
	test("employee count is correct with count 0", () => {
		try {
			const peopleList: Array<TPeopleAttributes> = [];
			const setPeopleList = jest.fn();
			const { getByTestId } = customTestingRender(<Home />, {
				peopleList,
				setPeopleList,
			});
			const res = getByTestId("employee-count").textContent;

			expect(res).toBe("No employees");
		} catch (error) {
			console.log(error);
		}
	});
});
