import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
// material module

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({

  exports: [
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ]
})
export class UserMaterial { }
