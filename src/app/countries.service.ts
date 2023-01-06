import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

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
}
