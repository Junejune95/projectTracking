import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPageHeaderComponent } from './component-page-header/component-page-header.component';
import { BasicComponentsMaterialModule } from './basic-components-material.module';
import { DataTableComponent } from 'app/shared/basic-components/data-table/data-table.component';



@NgModule({
  declarations: [
    ComponentPageHeaderComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    BasicComponentsMaterialModule
  ],
  exports:[
    ComponentPageHeaderComponent,
    DataTableComponent

  ]
})
export class BasicComponentsModule { }
