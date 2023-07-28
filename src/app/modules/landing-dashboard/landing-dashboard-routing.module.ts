import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingDashboardComponent } from './landing-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:LandingDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingDashboardRoutingModule { }
