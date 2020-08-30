import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Three1Component } from './three1/three1.component';
import { Three2Component } from './three2/three2.component';
import { Three3Component } from './three3/three3.component';
import {FiveModule} from './five/five.module';


@NgModule({
  declarations: [Three1Component, Three2Component, Three3Component],
  exports: [Three1Component, Three2Component, Three3Component],
  imports: [
    CommonModule,
    FiveModule
  ]
})
export class ThreeModule { }
