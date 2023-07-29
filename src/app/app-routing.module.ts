import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { MissionComponent } from './modules/mission/mission.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./modules/landing-dashboard/landing-dashboard.module').then(module => module.LandingDashboardModule)
  },
  {
    path:'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(auth =>auth.AuthModule)
  },
  {
    path:'food-info',
    loadChildren:() => import('./modules/post-waste-food/post-waste-food.module').then(post => post.PostWasteFoodModule)
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'mission',
    component:MissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
