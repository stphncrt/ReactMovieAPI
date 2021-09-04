import styled from "styled-components";

export const StyledCardWrapper = styled.div`
	margin: 10px;
	width: 15%;
	height: 350px;
	border-radius: 0.5rem;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	transition: 0.2s;

	&:hover {
		transform: scale(1.1);
	}
`;
export const StyledText = styled.p`
	color: rgba(0, 0, 60, 0.8);
	font-size: 15px;
	padding: 2px;
	font-size: 1rem;

	margin: 3px 3px 2px 3px;
`;

export const StyledImg = styled.img`
	width: 90%;
	height: 85%;
	margin: 5px;
	margin-bottom: 0px;
`;
