import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../shared/interfaces/country';
import { CountriesService } from '../../shared/services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-countries',
  templateUrl: './form-countries.component.html',
  styleUrls: ['./form-countries.component.scss'],
})
export class FormCountriesComponent implements OnInit {
  public countryForm: FormGroup;

  @Input() submittedCountry?: Country;

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  private initForm(
    submittedCountry: Country = {
      name: { common: '' },
      capital: '',
      flags: { png: '' },
      population: '',
    }
  ): FormGroup {
    return this.fb.group({
      name: new FormGroup({
        common: this.fb.control(submittedCountry.name!['common']),
      }),
      flags: new FormGroup({
        svg: this.fb.control(submittedCountry.flags!['svg']),
      }),
      capital: [submittedCountry.capital, Validators.required],
      population: [submittedCountry.population, Validators.required],
    });
  }
}
