import React from "react";
import { StyledCardWrapper, StyledText, StyledImg, StyledTitleLink } from "./MovieCardDetailStyle";

function MovieDetailCard({ movieDetail, imgUrl }) {
	return (
		<StyledCardWrapper>
			<StyledTitleLink href={movieDetail.homepage}>{movieDetail.title}</StyledTitleLink>
			<StyledImg src={imgUrl} alt="Nothing Showed Up" />
			<StyledText> {movieDetail.overview} </StyledText>
		</StyledCardWrapper>
	);
}

export default MovieDetailCard;
