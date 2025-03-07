import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Country } from './country';
import { CountryService } from './country.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  countryData: Country[] = [];

  constructor(
    private countryService: CountryService,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  fetchData(): void {
    this.countryService
      .fetchCountryData()
      .pipe(first())
      .subscribe((result) => {
        // TODO - connect the data...
        this.changeRef.markForCheck();
      });
  }

  searchChanged() {}
}
