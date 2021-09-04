import React from "react";
// import "./style.css";

// export function Card() {
// 	return (
// 		<div id="card">
// 			<p>CARD</p>
// 		</div>
// 	);
// }
import { StyledCardWrapper, StyledText, StyledImg } from "./card.style";
const baseImgUrl = "https://image.tmdb.org/t/p/w500";
export function Card({ dataObj }) {
	console.log(dataObj.title);
	return (
		<StyledCardWrapper>
			<StyledImg src={baseImgUrl + dataObj.poster_path} alt={dataObj.title}></StyledImg>
			<StyledText> {dataObj.title} </StyledText>
		</StyledCardWrapper>
	);
}
