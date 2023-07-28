import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDonorComponent } from './login-doner/login-doner.component';
import { RegisterDonorComponent } from './register-doner/register-doner.component';

const routes: Routes = [
  {
    path:'login-donor',
    component:LoginDonorComponent
  },
  {
    path:'register-donor',
    component:RegisterDonorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
