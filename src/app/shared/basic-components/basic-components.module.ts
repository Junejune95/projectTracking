import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPageHeaderComponent } from './component-page-header/component-page-header.component';
import { BasicComponentsMaterialModule } from './basic-components-material.module';



@NgModule({
  declarations: [
    ComponentPageHeaderComponent,
  ],
  imports: [
    CommonModule,
    BasicComponentsMaterialModule
  ],
  exports:[
    ComponentPageHeaderComponent

  ]
})
export class BasicComponentsModule { }
