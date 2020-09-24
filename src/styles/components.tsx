import styled from "styled-components";

type TStyledButtonProps = {
	primary?: boolean;
	dropShadow?: boolean;
	size?: "large";
};
export const StyledButton = styled.button<TStyledButtonProps>`
	cursor: pointer;
	padding: 8px 30px 9px;
	text-align: center;
	box-sizing: border-box;
	height: ${({ size }) => (size === "large" ? "45px" : "40px")};
	line-height: 19px;
	border-radius: 50px;
	font-size: 16px;
	color: ${({ primary }) => (primary ? "#FFF" : "var(--color-primary-accent)")};
	border: ${({ primary }) =>
		primary
			? "var(--color-primary-accent) 2px solid"
			: "var(--color-primary-accent-faded) 2px solid"};
	background-color: ${({ primary }) => (primary ? "var(--color-primary-accent)" : "transparent")};
	box-shadow: ${({ dropShadow }) => (dropShadow ? "0px 6px 12px rgba(98, 77, 227, 0.3)" : null)};
`;

export const ReallyBigTitle = styled.h1`
	font-size: 5rem;
`;
