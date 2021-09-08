import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: absolute;
	top: 3rem;
	left: 5rem;

	flex-direction: column;
	display: flex;
`;
export const StyledIcon = styled.img`
	color: yellow;
	size: 30%;
	:hover {
		transition: scale 1.2;
	}
`;

export const StyledText = styled.h1`
	font-size: 1.3rem;
	color: yellow;
`;
