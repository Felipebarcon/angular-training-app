import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  public getData(input: string) {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${input}`
    );
  }

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
}
