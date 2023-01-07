import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss'],
})
export class CountriesContainerComponent implements OnInit {
  constructor(private countryService: CountriesService) {}

  public countries?: BehaviorSubject<Country[] | []> =
    this.countryService.countries$;

  public inputValue: string = '';

  ngOnInit(): void {}

  submitCountry() {
    this.countryService
      .getData(this.inputValue)
      .subscribe((data: Country[]) => {
        this.countries!.next(Array.isArray(data) ? data : [data]);

        this.countryService.postCountries(data).subscribe((data: Country[]) => {
          this.countries!.next(Array.isArray(data) ? data : [data]);
        });
      });
  }
}
