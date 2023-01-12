import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country';
import { CountriesService } from '../../shared/services/countries.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.scss'],
})
export class CountriesDetailsComponent implements OnInit {
  @Input() countries$?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[] | []
  >([]);
  @Input() search: string;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.countries$.subscribe((countries: Country[]) => {
      this.countries$!.next(countries);
      console.log(this.countries$);
    });
  }

  // create a method to navigate to the search page
  selectCountry(country: Country) {
    this.countriesService.updateSearchCountry(country);
    this.router.navigate(['/search'], {
      queryParams: { country: country.name!['common'] },
    });
  }
}
