import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/interfaces/country';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss'],
})
export class CountriesContainerComponent implements OnInit {
  public countries$?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[]
  >([]);
  public inputValue: string = '';
  public submittedCountry: Country;
  public search = '';

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitCountry() {
    this.countriesService
      .getCountries(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countriesService
          .postCountries(data as Country)
          .subscribe((country: Country) => {
            this.countriesService.updateSearchCountry(country);
            this.router.navigate(['search'], {
              queryParams: { country: country.name!['common'] },
            });
          });
      });
  }
}
