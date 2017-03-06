import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/form/form.component';
import { LogsComponent } from './logs/logs.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/form/form.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { ChartComponent } from '../components/chart/chart.component';

import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductStatsComponent,
    ProductFeaturesComponent,
    FeaturesFormComponent,
    UsersComponent,
    UsersFormComponent,
    LogsComponent,
    FormComponent,
    LoginComponent,
    ChartComponent,
    DashboardTemplateComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
