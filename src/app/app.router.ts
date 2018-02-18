import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { ScalingGroupsComponent } from './components/scaling-groups/scaling-groups.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateScalingGroupComponent } from './components/create-scaling-group/create-scaling-group.component';

export const router: Routes = [
  {path: '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'scaling-groups', component: ScalingGroupsComponent},
  {path: 'create-scaling-groups', component: CreateScalingGroupComponent},
  {path: 'dashboard', component: DashboardComponent},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
