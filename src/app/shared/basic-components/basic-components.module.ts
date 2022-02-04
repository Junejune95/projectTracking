import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPageHeaderComponent } from './component-page-header/component-page-header.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ComponentPageHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    ComponentPageHeaderComponent

  ]
})
export class BasicComponentsModule { }
