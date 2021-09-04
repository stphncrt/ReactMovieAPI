import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import axios from "axios";
import { StyledCardListWrapper } from "../CardList/CardListStyle";

const apiKey = "4cb9d7dff82867860339d6678ef42a52";
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export function CardList() {
	const [movieData, setMovieData] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl, {
				params: {
					api_key: apiKey,
					page: 1,
					query: "Star Wars",
				},
			})
			.then((res) => setMovieData(res.data.results));
	}, []);
	console.log(movieData);
	return (
		<StyledCardListWrapper>
			{movieData &&
				movieData.map((movie, index) => {
					return <Card key={index} dataObj={movie} />;
				})}
		</StyledCardListWrapper>
	);
}
