import React from "react";

import { StyledWrapper, StyledText } from "./ImdbIconStyles";
import { useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
const ImdbIcon = () => {
	const iconHistory = useHistory();
	return (
		<StyledWrapper>
			<FiChevronLeft className="icon" onClick={iconHistory.goBack} color="yellow" size="80" />

			<StyledText># IMDB #</StyledText>
		</StyledWrapper>
	);
};

export default ImdbIcon;
