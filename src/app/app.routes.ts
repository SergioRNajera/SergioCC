import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UsersFormComponent } from './users/form/form.component';
import { UsersComponent } from './users/users.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: DashboardTemplateComponent,
      path: '',
    },
    {path: 'users', children: [
      {path: '', component: UsersComponent},
      {path: 'add', component: UsersFormComponent},
      {path: ':id/delete', component: UsersFormComponent},
      {path: ':id/edit', component: UsersFormComponent},
    ]},
  ]},
];

export const appRoutingProviders: any[] = [
];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
