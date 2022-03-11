import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentsModule } from 'app/shared/basic-components/basic-components.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserMaterial } from './user-material.module';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'create',
    component: UserCreateComponent,
  }
];


@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    UserMaterial
  ]
})
export class UserModule { }
