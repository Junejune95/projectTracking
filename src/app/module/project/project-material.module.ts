import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material module
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({

  exports: [
    MatExpansionModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTabsModule
 
  ]
})
export class ProjectMaterial { }
