import React from "react";

const SearchForm = ({ handleSubmit, handleChange }) => {
	return (
		<form action="" onSubmit={handleSubmit}>
			<label htmlFor="name">Name of the stock</label>
			<input type="text" placeholder="Stock symbol" onChange={handleChange} />
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchForm;
