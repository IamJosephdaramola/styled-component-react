import styled from 'styled-components';
import * as CSS from 'csstype';

interface ButtonProps {}

type ButtonTypes = CSS.Properties & ButtonProps;

export const Button = styled.button<ButtonTypes>`
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 15px 60px;
	background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
	color: ${({ color }) => color || '#333'};
	transition: all 250ms ease-in-out;

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;
