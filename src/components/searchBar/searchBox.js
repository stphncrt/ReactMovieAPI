import React, { useState } from "react";
import { StyledSearchBox, StyledInput, StyledButton, StyledHeadText } from "./searchStyle";

function SearchBox({ setQueryString }) {
	const [text, setText] = useState("");
	return (
		<StyledSearchBox>
			<StyledHeadText>IMDB</StyledHeadText>
			<StyledInput placeholder={"Text your movie name"} onChange={(e) => setText(e.target.value)} />
			<StyledButton onClick={() => setQueryString(text)}> Search </StyledButton>{" "}
		</StyledSearchBox>
	);
}

export { SearchBox };
