import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdSelectModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdSelectModule,
    MdButtonModule
  ],
  exports: [
    MdInputModule,
    MdSelectModule,
    MdButtonModule
  ]
})
export class CustomMaterialModule { }
