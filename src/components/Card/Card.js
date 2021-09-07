import React from "react";

import { useHistory } from "react-router-dom";

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
	const history = useHistory();
	return (
		<StyledCardWrapper onClick={() => history.push(`/detail/${dataObj.id}`)}>
			<StyledImg src={baseImgUrl + dataObj.poster_path} alt={dataObj.title}></StyledImg>
			<StyledText> {dataObj.title} </StyledText>{" "}
		</StyledCardWrapper>
	);
}
