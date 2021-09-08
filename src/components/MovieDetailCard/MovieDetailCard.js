import React from "react";
import { StyledCardWrapper, StyledText, StyledTitle, StyledImg } from "./MovieCardDetailStyle";

function MovieDetailCard({ movieDetail, imgUrl }) {
	return (
		<StyledCardWrapper>
			<StyledTitle> {movieDetail.original_title} </StyledTitle>
			<StyledImg src={imgUrl} alt="Nothing Showed Up" />
			<StyledText> {movieDetail.overview} </StyledText>
		</StyledCardWrapper>
	);
}

export default MovieDetailCard;
