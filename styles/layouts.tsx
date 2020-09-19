import styled from "styled-components";

export const Header = styled.header`
	display: grid;
	justify-items: end;
	background-color: var(--header-bg-color);
	height: 70px;
	padding: 0 100px;
`;

export const GridContainer = styled.div`
	display: grid;
	justify-items: center;
	padding: 0 100px;
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
`