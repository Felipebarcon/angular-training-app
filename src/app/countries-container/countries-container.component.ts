import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../country';
import { BehaviorSubject } from 'rxjs';
import { isArray } from '@angular/compiler-cli/src/ngtsc/annotations/common';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss'],
})
export class CountriesContainerComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}

  public countries$?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[]
  >([]);

  public inputValue: string = '';

  ngOnInit(): void {
    console.log(this.countries$); // log the countries$ subject to the console
    this.countriesService.countries$.subscribe((countries: Country[]) => {
      this.countries$!.next(countries);
    });
  }

  submitCountry() {
    this.countriesService
      .getCountries(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countriesService
          .postCountries(data as Country)
          .subscribe((country: Country) => {
            this.countries$!.next([country]);
          });
      });
  }
}
