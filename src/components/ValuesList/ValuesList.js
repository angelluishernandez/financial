import React from "react";

const ValuesList = ({ quotes }) => {
	console.log(quotes);
	return (
		<div>
			{quotes.map((quote, index) => {
				return (
					<div key={index}>
						<p>Open => {quote["1. open"]}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ValuesList;
