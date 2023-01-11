import { Component, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country';
import { CountriesService } from '../../shared/services/countries.service';

@Component({
  selector: 'app-countries-search',
  templateUrl: './countries-search.component.html',
  styleUrls: ['./countries-search.component.scss'],
})
export class CountriesSearchComponent implements OnInit {
  public submittedCountry: Country;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.currentCountry.subscribe((country) => {
      if (country !== null) {
        this.submittedCountry = country;
      }
    });
  }
}
