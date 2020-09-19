import styled from "styled-components";

type TStyledButtonProps = {
	primary?: boolean;
	dropShadown?: boolean;
};
export const StyledButton = styled.button<TStyledButtonProps>`
	padding: 12px 20px;
	border-radius: 25px;
	font-size: 16px;
	color: ${({ primary }) =>
		primary ? "#FFF" : "var(--color-primary-accent)"};
	border: ${({ primary }) => (primary ? "none" : "red 2px solid")};
	background-color: ${({ primary }) =>
		primary ? "var(--color-primary-accent)" : "transparent"};
`;
