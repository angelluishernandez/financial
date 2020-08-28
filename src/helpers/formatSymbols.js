const symbolsToString = (symbols) =>
	symbols.map((symbol) => `&symbol=${symbol}`).join("");

export const formatSymbols = (symbols) => {
	const formattedSymbols = symbolsToString(symbols);
	return `${formattedSymbols}&apikey=demo`;
};
