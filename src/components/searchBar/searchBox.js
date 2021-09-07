import React, { useRef } from "react";
import { StyledSearchBox, StyledInput, StyledButton, StyledHeadText } from "./searchStyle";

function SearchBox({ setQueryString }) {
	// const [text, setText] = useState("");
	const inputRef = useRef();
	console.log(inputRef?.current?.value);

	return (
		<StyledSearchBox>
			<StyledHeadText>IMDB</StyledHeadText>

			{/* Alternative codeblock of useRef
			<StyledInput placeholder={"Text your movie name"} onChange={(e) => setText(e.target.value)} />
			<StyledButton onClick={() => setQueryString(text)}> Search </StyledButton> */}
			<StyledInput placeholder="Enter your movie name.." ref={inputRef} />
			<StyledButton onClick={() => setQueryString(inputRef.current.value)}>Search</StyledButton>
		</StyledSearchBox>
	);
}

export { SearchBox };
