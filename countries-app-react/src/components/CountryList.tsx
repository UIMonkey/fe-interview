import "./CountryList.css";

import React, { useEffect, useState } from "react";

import { Country } from "../entities/country";
import { fetchCountries } from "../services/api";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
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
        <>
          <img src={""} alt={country.iconUrl} height="32px" width="32px" />
          <li key={index}>{country.name}</li>
        </>
      ))}
    </ul>
  );
};

export default CountryList;
