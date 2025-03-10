import { Country } from "../entities/country";
import { IAPICountry } from "../entities/api-country";

const API_URL = "https://restcountries.com/v3.1/all";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(API_URL);

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: IAPICountry[] = await response.json(); // Parse the JSON response
    return data.map((country) => Country.buildFromAPI(country));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
