import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataBaseService {
  public url: string = 'https://restapi.fr/api/countries';

  constructor() {}
}
