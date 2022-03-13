import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material module

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({

  exports: [
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatRadioModule,
  ]
})
export class UserMaterial { }
