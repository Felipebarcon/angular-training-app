import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../country';
import { CountriesService } from '../../countries.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.scss'],
})
export class CountriesDetailsComponent implements OnInit {
  public country!: Observable<Country>;
  @Input() public countries: Country[] | null = null;
  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.countriesService.fetchCountries().subscribe((data) => {
      this.countries = data;
    });
  }
}
