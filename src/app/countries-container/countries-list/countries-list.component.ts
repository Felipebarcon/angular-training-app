import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country';
import { CountriesService } from '../../shared/services/countries.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  @Input() countries$?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[] | []
  >([]);

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .fetchCountries()
      .subscribe((data: Country[]) => this.countries$!.next(data));
  }
}
