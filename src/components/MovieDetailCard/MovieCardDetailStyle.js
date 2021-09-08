import styled from "styled-components";

export const StyledCardWrapper = styled.div`
	width: 50%;
	height: 55rem;

	display: flex;
	flex-direction: column;
	background-color: black;
	align-items: center;
	border-radius: 0.5rem;
	border: 0.3rem solid yellow;
	margin: 2rem;
`;

export const StyledImg = styled.img`
	/* display: flex; */
	width: 90%;
	height: 60%;
`;

export const StyledText = styled.p`
	color: yellow;
	padding: 1rem;
	font-size: 1.3rem;
`;
export const StyledTitle = styled.h1`
	color: yellow;
	font-size: 1.5rem;
`;
export const StyledTitleLink = styled.a`
	color: yellow;
	font-size: 1.5rem;
	margin: 1rem;
	:hover {
		transform: scale(1.1);
	}
`;
