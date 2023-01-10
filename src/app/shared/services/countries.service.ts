import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries$: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[] | []
  >([]);

  constructor(private http: HttpClient) {}

  public getCountries(input: string) {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${input}`
    );
  }

  fetchCountries() {
    return this.http.get<Country[]>(`https://restapi.fr/api/countries`).pipe(
      tap((countries: Country[]) => {
        this.countries$.next(countries);
      })
    );
  }

  postCountries(country: Country): Observable<Country> {
    return this.http
      .post<Country>(`https://restapi.fr/api/countries`, country)
      .pipe(
        tap((country: Country) => {
          this.countries$.next([country]);
        })
      );
  }

  deleteCountries() {
    return this.http.delete<Country[]>(`https://restapi.fr/api/countries`);
  }
}
