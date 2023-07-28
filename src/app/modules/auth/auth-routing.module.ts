import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDonerComponent } from './login-doner/login-doner.component';
import { RegisterDonorComponent } from './register-doner/register-doner.component';

const routes: Routes = [
  {
    path:'login-doner',
    component:LoginDonerComponent
  },
  {
    path:'register-doner',
    component:RegisterDonorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
