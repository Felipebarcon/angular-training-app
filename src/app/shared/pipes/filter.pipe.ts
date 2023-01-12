import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country';
import { BehaviorSubject, filter, map } from 'rxjs';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    subject: BehaviorSubject<Country[]>,
    search: string
  ): BehaviorSubject<Country[]> {
    return subject.pipe(
      map((countries) => {
        if (!countries) {
          return [];
        }
        if (!search) {
          return countries;
        }
        search = search.toLowerCase();
        return countries.filter((country) => {
          return country.name!['common'].toLowerCase().includes(search);
        });
      }),
      filter((countries) => countries.length > 0)
    ) as BehaviorSubject<Country[]>;
  }
}
