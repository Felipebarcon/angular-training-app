import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../country';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss'],
})
export class CountriesContainerComponent implements OnInit {
  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public countries$?: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[]
  >([]);

  public inputValue: string = '';

  public countryName: string = '';
  public submittedCountry: Country;

  public filteredCountries$: Observable<Country[]>;

  ngOnInit(): void {
    /*    this.countriesService.countries$.subscribe((countries: Country[]) => {
      this.countries$!.next(countries);
    });
    this.route.queryParams.subscribe((params) => {
      this.countryName = params['country'];
    });*/
    this.route.queryParams.subscribe((params) => {
      this.countryName = params['country'];
    });
    this.countries$ = this.countriesService.countries$;
    this.filteredCountries$ = this.countries$.pipe(
      map((countries) =>
        countries.filter(
          (country) => country.name!['common'] === this.countryName
        )
      )
    );
  }

  submitCountry() {
    this.countriesService
      .getCountries(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countriesService
          .postCountries(data as Country)
          .subscribe((country: Country) => {
            this.submittedCountry = country;
            this.router.navigate(['search'], {
              queryParams: { country: country.name!['common'] },
            });
          });
      });
  }
}
