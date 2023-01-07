import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public countryData$?: Observable<Country[]> =
    this.countryService.countryData$;

  public inputValue: string = '';
  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {}

  clearCountries(countryData: Country[]) {
    this.countryService.deleteCountries(countryData).subscribe();
  }
}
