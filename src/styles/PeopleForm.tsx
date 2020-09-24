import { TAlertProps } from "components/PeopleForm";
import styled from "styled-components";

export const PeopleFormContainer = styled.div`
	display: grid;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 6px 6px 54px rgba(0, 0, 0, 0.05);
	width: 100%;
`;

export const PeopleFormHeader = styled.div`
	padding: 34px 36px;
	border-bottom: 1px solid #eaedf3;
	font-size: 22px;
`;

export const PeopleFormFooter = styled.div`
	padding: 32px 0;
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-gap: 1rem;
	background: #f9faff;
	border-radius: 10px;
	justify-items: center;
	justify-content: center;
`;

export const PeopleFormMain = styled.div`
	display: grid;
	justify-self: center;
	width: 100%;
	max-width: 600px;
	grid-gap: 1.5rem;
	padding: 48px 0;
`;

export const PeopleFormTextInput = styled.input`
	border: none;
	font-size: 20px;
	padding-top: 4px;
	width: 100%;
	border-bottom: #ced5db 1.5px solid;
	color: var(--color-text-main);

	::placeholder {
		color: var(--color-text-soft);
		opacity: 100%;
	}

	&:focus {
		outline: none;
		border-bottom: var(--color-primary-accent) 1.5px solid;
	}
`;

export const PeopleFormDateInput = styled.input.attrs({ type: "date" })`
	font-family: inherit;
	border: none;
	font-size: 20px;
	padding-top: 4px;
	width: 100%;
	border-bottom: #ced5db 1.5px solid;

	&:focus {
		outline: none;
		border-bottom: var(--color-primary-accent) 1.5px solid;
	}
	&::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
`;

export const PeopleFormSelectInput = styled.select`
	width: 100%;
	font-size: 20px;
	padding-top: 4px;
	cursor: pointer;
	border: none;
	appearance: none;
	border-bottom: #ced5db 1.5px solid;

	&:focus {
		outline: none;
		border-bottom: var(--color-primary-accent) 1.5px solid;
		color: var(--color-text-main);
	}

	& option {
		padding: 0;
		color: var(--color-text-main);
	}
`;

export const FormCaptureFocus = styled.div<{ isSelect?: boolean }>`
	&:focus-within {
		color: var(--color-primary-accent);
	}
	position: relative;

	${({ isSelect }) =>
		isSelect &&
		`
	&:after {
		position: absolute;
		font-size: 18px;
		transform: rotate(180deg);
		right: 10px;
		content:"⌃";
	}
`}
`;

export const AlertWrapper = styled.div<TAlertProps>`
	position: fixed;
	top: 80px;
	left: 50%;

	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 2rem;
	align-items: center;

	padding: 10px 20px;
	border-radius: 5px;
	font-size: 14px;
	border: 1px solid rgba(255, 0, 0, 0.2);
	background: rgb(255, 240, 240);
	color: rgba(180, 0, 0, 0.8);

	transform: translate(-50%, ${({ visible }) => (visible ? "0" : "-80px")});
	opacity: ${({ visible }) => (visible ? "100%" : "0")};
	visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
	transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out, visibility 0.25s ease-in-out;
`;
