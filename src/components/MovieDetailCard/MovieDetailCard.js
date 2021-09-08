import React from "react";
import {
	StyledCardWrapper,
	StyledText,
	StyledTitle,
	StyledImg,
	StyledTitleLink,
} from "./MovieCardDetailStyle";

function MovieDetailCard({ movieDetail, imgUrl }) {
	return (
		<StyledCardWrapper>
			{/* <StyledTitle> {movieDetail.original_title} </StyledTitle> */}
			<StyledTitleLink href={movieDetail.homepage}>{movieDetail.title}</StyledTitleLink>
			<StyledImg src={imgUrl} alt="Nothing Showed Up" />
			<StyledText> {movieDetail.overview} </StyledText>
			{/* <a  href={movieDetail.homepage}>Home Page</a> */}
		</StyledCardWrapper>
	);
}

export default MovieDetailCard;
