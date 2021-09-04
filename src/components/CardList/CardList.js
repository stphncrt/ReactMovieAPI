import { Card } from "../Card/Card";
import { StyledCardListWrapper } from "../CardList/CardListStyle";

export function CardList({ movieData }) {
	return (
		<StyledCardListWrapper>
			{movieData &&
				movieData.map((movie, index) => {
					return <Card key={index} dataObj={movie} />;
				})}
		</StyledCardListWrapper>
	);
}
