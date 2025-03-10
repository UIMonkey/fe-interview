import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import './styles/App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>Countries App</h1>
      <CountryList countries={countries} />
    </div>
  );
}

export default App;