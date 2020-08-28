import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";
import ValuesList from "../../components/ValuesList/ValuesList";

const Home = () => {
	const [symbol, setSymbol] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [quotes, setQuotes] = useState([]);

	const apiKey = process.env.REACT_APP_API_KEY;

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
		axios
			.get(url)
			.then((res) => {
				const quotesData = res.data["Time Series (Daily)"];
				setQuotes(Object.values(quotesData));
			})
			.then(() => setSubmitted(true));
	};

	const handleChange = (e) => {
		setSubmitted(false);
		setSymbol(e.target.value);
	};

	console.log(quotes);

	return (
		<>
			<SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
			{submitted && <ValuesList quotes={quotes} />}
		</>
	);
};

export default Home;
