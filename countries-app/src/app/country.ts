import { IAPICountry } from './api-country';

export interface ICountry {
  name: string;
  iconUrl: string;
  capital: string;
}

export class Country implements ICountry {
  name = '';
  iconUrl = '';
  capital = '';

  constructor(options?: Partial<ICountry>) {
    Object.assign(this, options);
  }

  public static buildFromAPI(apiCountry: IAPICountry): Country {
    return {
      name: apiCountry?.name?.common || '',
      iconUrl: apiCountry?.flags?.svg || '',
      capital: '',
    };
  }
}
