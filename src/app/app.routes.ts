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
    path: 'forms',
    component: FormCountriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'countries',
    component: CountriesContainerComponent,
  },

  {
    path: 'search',
    component: CountriesSearchComponent,
    pathMatch: 'full',
  },
];
