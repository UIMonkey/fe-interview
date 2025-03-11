import "./CountryList.css";

import React, { useEffect, useState } from "react";

import { Country } from "../entities";
import CountryListItem from "./CountryListItem";

// import { fetchCountries } from "../services/countries-service";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        // setLoading(false);
      }
    };

    getCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {countries.map((country, index) => (
        <CountryListItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
