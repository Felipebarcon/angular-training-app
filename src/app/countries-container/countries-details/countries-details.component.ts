import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../shared/interfaces/country';
import { CountriesService } from '../../shared/services/countries.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.scss'],
})
export class CountriesDetailsComponent implements OnInit {
  @Input() countries$?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[] | []
  >([]);
  @Output() countrySelected = new EventEmitter<Country>();

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.countries$.subscribe((countries: Country[]) => {
      this.countries$!.next(countries);
    });
  }

  selectCountry(country: Country) {
    console.log('[Output Details Component: ]', country);
    this.countrySelected.emit(country);
  }
}
