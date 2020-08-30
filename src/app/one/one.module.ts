import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { One1Component } from './one1/one1.component';
import {TwoModule } from './two/two.module';


@NgModule({
  declarations: [One1Component],
  exports: [One1Component],
  imports: [
    CommonModule,
    TwoModule
  ]
})
export class OneModule { }
