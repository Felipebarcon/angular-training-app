import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MATERIALS = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [],
  imports: [MATERIALS],
  exports: MATERIALS,
})
export class MaterialModule {}
