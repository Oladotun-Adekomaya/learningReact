// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [foreignCurrency, setForeignCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [returnedValue, setreturnedValue] = useState(0);

  console.log("base currency:", baseCurrency);
  console.log("foreign currency:", foreignCurrency);
  console.log(amount);
  console.log(returnedValue);

  function handleChangeCurrency(setterFunc, value) {
    setterFunc(value);
  }

  const api = `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${foreignCurrency}`;

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchExchangeRate() {
        try {
          const res = await fetch(api, { signal: controller.signal });
          const data = await res.json();
          console.log(data);
          const rates = data.rates;
          const value = Object.values(rates);
          setreturnedValue(value[0]);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
          }
        } finally {
        }
      }
      if (amount > 0 && baseCurrency !== foreignCurrency) fetchExchangeRate();
      if (foreignCurrency === baseCurrency) {
        setreturnedValue(amount);
      }

      return function () {
        controller.abort();
        setreturnedValue(0);
      };
    },
    [amount, api]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setAmount(e.target.value)} />
      <select
        onChange={(e) => handleChangeCurrency(setBaseCurrency, e.target.value)}
        defaultValue="USD"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(e) =>
          handleChangeCurrency(setForeignCurrency, e.target.value)
        }
        defaultValue="EUR"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{returnedValue}</p>
    </div>
  );
}
