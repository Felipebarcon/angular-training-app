import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataBaseService {
  public url: string = 'https://restapi.fr/api/countries';

  addCountries() {
    return this.http.get<Country[]>(`https://restapi.fr/api/countries`);
  }

  postCountries(country: Country[]) {
    return this.http.post<Country[]>(
      `https://restapi.fr/api/countries`,
      country
    );
  }

  deleteCountries(countries: Country[]): Observable<Country[]> {
    return this.http.delete<Country[]>(`https://restapi.fr/api/countries/`);

  }

  constructor(private http: HttpClient) {}
}
