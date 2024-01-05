import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

const mat_modules: any[] = [
  MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mat_modules
  ],
  exports: [mat_modules]
})
export class MaterialModule { }
