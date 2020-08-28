import axios from "axios";
import { formatSymbols } from "../helpers/formatSymbols";

const apiKey = process.env.REACT_APP_API_KEY;

const http = axios.create({
	baseUrl: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY",
	withCredentials: true,
});

http.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error.response && error.response.status === 401) {
			localStorage.clear();
			window.location.assign("/login");
		}

		return Promise.reject(error);
	}
);

const getOneDailyQuote = (symbol) => {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
	console.log(symbol, apiKey, url);
	axios.get(url);
};

const getDailyQuotes = (symbols) => http.get(formatSymbols(symbols));

export default {
	getOneDailyQuote,
	getDailyQuotes,
};
