import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries?: Country[];

  constructor(private http: HttpClient) {}

  public getData(input: string) {
    return this.http.get<Country[]>(
      `https://restcountries.com/v3.1/name/${input}`
    );
  }
}
