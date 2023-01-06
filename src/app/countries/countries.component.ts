import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  constructor(private countryService: CountriesService) {}

  public countryData?: Country[];

  public inputValue: string = '';

  ngOnInit(): void {}

  submitCountry() {
    this.countryService
      .getData(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countryData = data;
        console.log(this.countryData);
      });
  }

  ngOnDestroy() {}
}
