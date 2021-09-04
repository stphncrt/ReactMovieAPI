import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { SearchBox } from "./components/searchBar/searchBox";
const apiKey = "4cb9d7dff82867860339d6678ef42a52";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
function App() {
	const [movieData, setMovieData] = useState([]);
	const [queryString, setQueryString] = useState("star wars");

	useEffect(() => {
		axios
			.get(baseUrl, {
				params: {
					api_key: apiKey,
					page: 1,
					query: queryString,
				},
			})
			.then((res) => setMovieData(res.data.results));
	}, [queryString]);
	console.log(movieData);
	return (
		<div className="App">
			<SearchBox setQueryString={setQueryString} />

			<CardList movieData={movieData} />
		</div>
	);
}

export default App;
