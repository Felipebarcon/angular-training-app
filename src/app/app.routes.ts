import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { CountriesDetailsComponent } from './countries-container/countries-details/countries-details.component';

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
      { path: ':index', component: CountriesDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
];
