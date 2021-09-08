import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pages.css";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard/MovieDetailCard";
import ImdbIcon from "../components/IMDB/ImdbIcon";

const baseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "4cb9d7dff82867860339d6678ef42a52";
const baseImgUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetails() {
	const { id } = useParams();
	const [movieDetail, setMovieDetail] = useState([]);
	const imgUrl = baseImgUrl + movieDetail.poster_path;

	useEffect(() => {
		axios
			.get(baseUrl + id, {
				params: {
					api_key: apiKey,
				},
			})
			.then((response) => setMovieDetail(response?.data));
	}, []);
	console.log(movieDetail);
	return (
		<div className="movieDetail">
			<ImdbIcon />
			<MovieDetailCard imgUrl={imgUrl} movieDetail={movieDetail} />
		</div>
	);
}

export { MovieDetails };
