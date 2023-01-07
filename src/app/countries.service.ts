import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries$: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[] | []
  >([]);

  constructor(private http: HttpClient) {}

  public getData(input: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${input}`
    );
  }

  fetchCountries() {
    return this.http.get<Country[]>(`https://restapi.fr/api/countries`);
  }

  postCountries(country: Country[]) {
    return this.http.post<Country[]>(
      `https://restapi.fr/api/countries`,
      country
    );
  }

  deleteCountries() {
    return this.http.delete<Country[]>(`https://restapi.fr/api/countries`);
  }
}
