import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CanActiveService } from './services/auth-gaurd/can-active.service';
import { ManageSplunkAppsComponent } from './components/manage-splunk-apps/manage-splunk-apps.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [CanActiveService]
  },
  {
    path: 'splunkapps',
    component: ManageSplunkAppsComponent,
    canActivate: [CanActiveService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
