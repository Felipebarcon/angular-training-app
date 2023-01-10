import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountriesListComponent } from './countries-container/countries-list/countries-list.component';

import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { CountriesDetailsComponent } from './countries-container/countries-details/countries-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { FormCountriesComponent } from './form-countries/form-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CountriesContainerComponent,
    CountriesListComponent,
    CountriesDetailsComponent,
    FormCountriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
