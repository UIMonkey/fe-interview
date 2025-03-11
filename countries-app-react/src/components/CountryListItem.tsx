import { Country } from "../entities";
import React from "react";

interface CountryItemProps {
  country: Country;
}

const CountryListItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
      <img src={""} alt={country.iconUrl} height="32px" width="32px" />
      <li>{country.name}</li>
  );
};

export default CountryListItem;
