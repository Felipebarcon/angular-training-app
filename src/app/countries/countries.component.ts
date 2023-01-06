import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { CountriesDataBaseService } from '../countries-data-base.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  constructor(
    private countryService: CountriesService,
    private countryDb: CountriesDataBaseService
  ) {}

  public countryData?: Country[];

  public inputValue: string = '';

  ngOnInit(): void {
    this.countryDb.addCountries().subscribe((data: Country[]) => {
      this.countryData = data;
    });
  }

  submitCountry() {
    this.countryService
      .getData(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countryData = data;

        this.countryDb.postCountries(data).subscribe((response: Country[]) => {
          this.countryData = response;
        });
      });
  }

  ngOnDestroy() {}
}
