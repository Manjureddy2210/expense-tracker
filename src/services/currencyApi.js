export const fetchExchangeRate = async (currency) => {

  const response = await fetch(
    "https://open.er-api.com/v6/latest/USD"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rate");
  }

  const data = await response.json();

  console.log("API DATA:", data);

  const rate = data.rates[currency];

  if (!rate) {
    throw new Error("Currency rate missing");
  }

  return rate;
};