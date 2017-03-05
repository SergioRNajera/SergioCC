import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: DashboardTemplateComponent,
      path: '',
    }]},
];

export const appRoutingProviders: any[] = [
];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
