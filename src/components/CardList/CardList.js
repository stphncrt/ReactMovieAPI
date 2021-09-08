import { Card } from "../Card/Card";
import { StyledCardListWrapper } from "../CardList/CardListStyle";
import { useContext } from "react";
import { MovieContext } from "../../pages/Movie";

export function CardList() {
	const { movieData } = useContext(MovieContext);
	return (
		<StyledCardListWrapper>
			{" "}
			{movieData &&
				movieData.map((movie, index) => {
					return <Card key={index} dataObj={movie} />;
				})}{" "}
		</StyledCardListWrapper>
	);
}
