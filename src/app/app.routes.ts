import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HomepageComponent } from './homepage/homepage.component';

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
    component: CountriesComponent,
  },
];
