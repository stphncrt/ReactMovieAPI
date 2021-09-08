import React from "react";

import { StyledWrapper, StyledText, StyledIcon } from "./ImdbIconStyles";
import { useHistory } from "react-router-dom";

const ImdbIcon = () => {
	const iconHistory = useHistory();
	return (
		<StyledWrapper>
			{/* <StyledIcon src="../../assets/bevolking.png" /> */}
			<StyledText onClick={iconHistory.goBack}>#IMDB#</StyledText>
		</StyledWrapper>
	);
};

export default ImdbIcon;
