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
	grid-template-columns: repeat(2, minmax(150px, max-content));
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
`;

export const PeopleFormTextInput = styled.input`
	box-sizing: none;
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
