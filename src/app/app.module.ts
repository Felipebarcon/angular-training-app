import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesListComponent } from './countries-container/countries-list/countries-list.component';

import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { CountriesDetailsComponent } from './countries-container/countries-details/countries-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { FormCountriesComponent } from './countries-container/form-countries/form-countries.component';
import { CountriesSearchComponent } from './countries-container/countries-search/countries-search.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CountriesContainerComponent,
    CountriesListComponent,
    CountriesDetailsComponent,
    FormCountriesComponent,
    CountriesSearchComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
