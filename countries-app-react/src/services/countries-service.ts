import { Country, IAPICountry } from "../entities";

const API_URL = "https://restcountries.com/v3.1/all?fields=name,flags";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: IAPICountry[] = await response.json();
    return data.map((country) => Country.buildFromAPI(country));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
