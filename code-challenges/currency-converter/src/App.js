// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";

export default function App() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [foreignCurrency, setForeignCurrency] = useState("EUR");

  console.log("base currency:", baseCurrency);
  console.log("foreign currency:", foreignCurrency);

  function handleChangeCurrency(setterFunc, value) {
    setterFunc(value);
  }

  return (
    <div>
      <input type="text" />
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
      <p>OUTPUT</p>
    </div>
  );
}
