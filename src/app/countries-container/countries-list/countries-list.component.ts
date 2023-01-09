import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../country';
import { CountriesService } from '../../shared/services/countries.service';

@Component({
  selector: 'app-countries-container-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  @Input() public countries: Country[] | null;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.fetchCountries().subscribe((data: Country[]) => {
      this.countries = data;
    });
  }
}
