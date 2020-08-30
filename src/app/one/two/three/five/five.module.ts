import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Five1Component } from './five1/five1.component';
import { Five2Component } from './five2/five2.component';
import { Five3Component } from './five3/five3.component';
import { Five4Component } from './five4/five4.component';
import { Five5Component } from './five5/five5.component';



@NgModule({
  declarations: [Five1Component, Five2Component, Five3Component, Five4Component, Five5Component],
  exports: [Five1Component, Five2Component, Five3Component, Five4Component, Five5Component],
  imports: [
    CommonModule
  ]
})
export class FiveModule { }
