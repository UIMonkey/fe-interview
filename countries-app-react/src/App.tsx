import "./App.css";

import CountryList from "./components/CountryList";

function calculateCountryGDP(): number {
  const start = Date.now();
  while (Date.now() - start < 5000) {}
  console.log("Task completed after 5 seconds.");
  return Math.random() * 1000000000;
}

function App() {
  return (
    <div className="App">
      <h1>Countries App</h1>
      <button type="button" onClick={calculateCountryGDP}>
        Calculate GDP
      </button>
      <CountryList />
    </div>
  );
}

export default App;
