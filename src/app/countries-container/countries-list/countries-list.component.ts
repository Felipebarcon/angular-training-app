import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../country';

@Component({
  selector: 'app-countries-container-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  @Input() public countries: Country[] | null = null;
  constructor() {}

  ngOnInit(): void {}
}
