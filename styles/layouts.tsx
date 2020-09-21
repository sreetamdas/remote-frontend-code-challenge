import styled from "styled-components";

export const Header = styled.header`
	display: grid;
	justify-items: end;
	align-items: center;
	background-color: var(--header-bg-color);
	height: 80px;
	padding: 0 100px;
`;

export const GridContainer = styled.div`
	display: grid;
	justify-items: center;
	padding: 40px 100px;
`;

export const PeopleListActionBar = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	width: 100%;
	padding: 30px 0;
`;

export const PeopleListContainer = styled.div`
	display: grid;
	width: 100%;
`;

export const PeopleListRowContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	grid-template-columns: repeat(4, minmax(100px, 1.5fr)) 1fr;
	grid-gap: 1rem;
`;

export const PeopleListEntryContainer = styled.div`
	padding: 30px 20px;
	margin: 5px 0;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 6px 6px 54px rgba(0, 0, 0, 0.05);
`;

export const PeopleListHeadingRow = styled.div`
	padding: 0 20px;
	text-transform: uppercase;
	font-size: 0.7rem;
`;
