import { Observable, first, map } from 'rxjs';

import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { IAPICountry } from './api-country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  /// API is available at https://restcountries.com/
  private dataUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';

  constructor(private http: HttpClient) {}

  public fetchCountryData(): Observable<Country[]> {
    return this.http.get<IAPICountry[]>('').pipe(
      first(),
      map((result: IAPICountry[]) => this.mapToDisplayData(result))
    );
  }

  public mapToDisplayData(countryData: IAPICountry[]): Country[] {
    return countryData.map((data) => {
      return Country.buildFromAPI(data);
    });
  }
}
