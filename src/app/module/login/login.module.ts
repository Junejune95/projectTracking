import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { LoginComponent } from './login/login.component';
import { LoginMaterialModule } from './login-material.module';
import { SharedMaterialModule } from 'app/shared-material.module';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    LoginMaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
