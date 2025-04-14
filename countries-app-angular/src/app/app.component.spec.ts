import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';
import { Country } from './country';
import { CountryService } from './country.service';
import { createMock } from '@testing-library/angular/jest-utils';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import userEvent from '@testing-library/user-event';

describe('AppComponent', () => {
  const MOCK_COUNTRIES: Country[] = [
    new Country({ name: 'Iceland' }),
    new Country({ name: 'Japan' }),
    new Country({ name: 'Brazil' }),
  ];

  test('Given there is no data, when the user selects the fetch data button, then data is returned and displayed as a list', async () => {
    const mockCountryService = createMock(CountryService);
    mockCountryService.fetchCountryData.mockImplementation(() => {
      return of([...MOCK_COUNTRIES]);
    });

    await render(AppComponent, {
      imports: [AppComponent],
      providers: [
        provideHttpClientTesting(),
        { provide: CountryService, useValue: mockCountryService },
      ],
    });

    const fetchButton = await screen.findByRole('button', {
      name: 'FETCH DATA',
    });
    await userEvent.click(fetchButton);

    expect(mockCountryService.fetchCountryData).toHaveBeenCalledTimes(1);

    // TODO - test that the returned data is displayed as a list
  });
});
