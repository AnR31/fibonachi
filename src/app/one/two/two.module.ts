import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Two1Component } from './two1/two1.component';
import { Two2Component } from './two2/two2.component';
import { ThreeModule } from './three/three.module';


@NgModule({
  declarations: [Two1Component, Two2Component],
  exports: [Two1Component, Two2Component],
  imports: [
    CommonModule,
    ThreeModule
  ]
})
export class TwoModule { }
