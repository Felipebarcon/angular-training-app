import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../country';
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.scss'],
})
export class CountriesDetailsComponent implements OnInit {
  @Input() public countries: Country[] | null;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.fetchCountries().subscribe((data: Country[]) => {
      this.countries = data;
    });
  }
}
