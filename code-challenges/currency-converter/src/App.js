// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  return (
    <div>
      <input type="text" />
      <select onChange={(e) => console.log(e.target.value)} value="USD">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => console.log(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
