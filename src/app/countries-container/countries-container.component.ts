import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss'],
})
export class CountriesContainerComponent implements OnInit {
  constructor(
    private countryService: CountriesService,
    private http: HttpClient
  ) {}

  public countries?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[]
  >([]);

  public inputValue: string = '';

  ngOnInit(): void {}

  submitCountry(input: string) {
    this.http
      .get(`https://restcountries.com/v3.1/name/${input}`)
      .subscribe((data: Country) => {
        this.countryService
          .postCountries(data as Country[])
          .subscribe((response: Country[]) => {
            this.countries!.next(response);
          });
      });
  }
}
