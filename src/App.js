import React from "react";
import Movie from "./pages/Movie";
import { MovieDetails } from "./pages/MovieDetails";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/detail/:id" component={MovieDetails} exact />
				<Route path="/" component={Movie} />
				<MovieDetails />
			</Switch>
		</BrowserRouter>
	);
}
