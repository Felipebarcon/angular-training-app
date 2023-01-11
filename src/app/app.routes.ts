import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { FormCountriesComponent } from './countries-container/form-countries/form-countries.component';
import { CountriesSearchComponent } from './countries-container/countries-search/countries-search.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'countries',
    component: CountriesContainerComponent,
    children: [
      {
        path: ':index',
        component: CountriesSearchComponent,
      },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  {
    path: 'forms',
    component: FormCountriesComponent,
  },
  {
    path: 'search',
    component: CountriesSearchComponent,
  },
];
