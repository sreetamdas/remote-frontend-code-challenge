import {
	formatDateToDDMMYYYY,
	formatDateToYYYYMMDD,
	formatSalaryToLocaleString,
	PEOPLE_LIST_INITIAL,
} from "utils";

describe("date formatting", () => {
	test("date formats to DD/MM/YYYY correctly", () => {
		const res = formatDateToDDMMYYYY(PEOPLE_LIST_INITIAL[0].dateOfBirth);
		expect(res).toBe("20/06/1997");
	});

	test("date formats to YYYY-MM-DD correctly", () => {
		const res = formatDateToYYYYMMDD(PEOPLE_LIST_INITIAL[0].dateOfBirth);
		expect(res).toBe("1997-06-20");
	});
});

describe("salary comma formatting", () => {
	test("salary formats input as string correctly", () => {
		const res = formatSalaryToLocaleString(PEOPLE_LIST_INITIAL[0].salary);
		expect(res).toBe("50,000");
	});
	test("salary formats input as number correctly", () => {
		const res = formatSalaryToLocaleString(PEOPLE_LIST_INITIAL[1].salary);
		expect(res).toBe("777,777");
	});
});
