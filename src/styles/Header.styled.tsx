import styled from 'styled-components';

interface StyledHeaderProps {
	bg?: string;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
	background-color: ${({ theme }) => theme.colors.header};'};
	padding: 40px 0;

	h1 {
		color: #333;
		font-size: 2rem;
		text-align: center;
	}
`;
