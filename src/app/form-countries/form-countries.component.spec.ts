import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountriesComponent } from './form-countries.component';

describe('FormCountriesComponent', () => {
  let component: FormCountriesComponent;
  let fixture: ComponentFixture<FormCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
