import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesContainerComponent } from './countries-container/countries-container.component';

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
  },
];
