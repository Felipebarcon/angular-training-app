import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { Country } from '../../country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries$: BehaviorSubject<Country[] | []> = new BehaviorSubject<
    Country[] | []
  >([]);

  constructor(private http: HttpClient) {
    console.log('[Service: ]', this.countries$);
  }

  public getCountries(input: string) {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${input}`
    );
  }

  fetchCountries() {
    return this.http.get<Country[]>(`https://restapi.fr/api/countriesapp`).pipe(
      tap((countries: Country[]) => {
        this.countries$.next(countries);
      })
    );
  }

  postCountries(country: Country): Observable<Country> {
    return this.http
      .post<Country>(`https://restapi.fr/api/countriesapp`, country)
      .pipe(
        tap((country: Country) => {
          this.countries$.next([country]);
        })
      );
  }

  deleteCountries() {
    return this.http.delete<Country[]>(`https://restapi.fr/api/countriesapp`);
  }
}
