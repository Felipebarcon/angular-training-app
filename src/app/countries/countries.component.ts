import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(private countryService: CountriesService) {}

  public countryData?: Country[];

  ngOnInit(): void {
    this.countryService.getData().subscribe((data: Country[]) => {
      this.countryData = data;
      console.log(this.countryData);
    });
  }
}
