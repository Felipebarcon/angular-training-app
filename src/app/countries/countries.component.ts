import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { CountriesDataBaseService } from '../countries-data-base.service';
import { logMessages } from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(
    private countryService: CountriesService,
    private countryDb: CountriesDataBaseService
  ) {}

  public countryData?: Country[];

  public inputValue: string = '';

  ngOnInit(): void {
    this.countryDb.addCountries().subscribe((data: Country[]) => {
      this.countryData = Array.isArray(data) ? data : [data];
    });
  }

  submitCountry() {
    this.countryService
      .getData(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countryData = Array.isArray(data) ? data : [data];

        this.countryDb.postCountries(data).subscribe((response: Country[]) => {
          this.countryData = Array.isArray(response) ? response : [response];
        });
      });
  }

  clearCountries(countryData: Country[]) {
    this.countryDb.deleteCountries(countryData).subscribe();
    this.countryData = this.countryData?.filter(
      (country) => country !== country
    );
  }
}
