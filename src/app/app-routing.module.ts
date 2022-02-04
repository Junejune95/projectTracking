import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('../app/module/login/login.module').then((m) => m.LoginModule)

  },
  {
    path: "tracking",
    component: SideMenuComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/module/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'project',
        loadChildren: () => import('../app/module/project/project.module').then((m) => m.ProjectModule)
      },
      {
        path: 'task',
        loadChildren: () => import('../app/module/task/task.module').then((m) => m.TaskModule)
      },
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
