import { useEffect, useState } from "react";
import { fetchExchangeRate } from "../services/currencyApi";

function CurrencyConverter({ expenses }) {

  const [currency, setCurrency] = useState("INR");
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currencies = ["INR", "EUR", "GBP", "JPY"];

  // Total Expense
  const total = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  // Fetch Rate
  useEffect(() => {

    const getRate = async () => {

      try {
        setLoading(true);
        setError("");

        const exchangeRate =
          await fetchExchangeRate(currency);

        setRate(exchangeRate);
        console.log("Exchange Rate:", exchangeRate);

      } catch (err) {
        console.error(err);
        setError("Unable to fetch live exchange rates.");
      } finally {
        setLoading(false);
      }
    };

    getRate();

  }, [currency]);

  // Converted Total
  const convertedAmount =
    rate && total
      ? (total * rate).toFixed(2)
      : "0.00";

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Currency Converter
        </h2>

        <p className="text-gray-500 mt-1 text-sm">
          Live exchange conversion
        </p>
      </div>

      {/* Dropdown */}
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
      >
        {currencies.map((item) => (
          <option key={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Loading */}
      {loading && (
        <p className="text-blue-500 text-sm mt-4">
          Fetching exchange rate...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mt-4">
          {error}
        </p>
      )}

      {/* Result */}
      {!loading && !error && (
        <div className="mt-5 bg-gray-50 rounded-2xl p-5">

          <p className="text-gray-500 text-sm">
            Converted Total
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {currency} {convertedAmount}
          </h2>

        </div>
      )}

    </div>
  );
}

export default CurrencyConverter;