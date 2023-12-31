import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginDonorComponent } from './login-doner/login-doner.component';
import { RegisterDonorComponent } from './register-doner/register-doner.component';


@NgModule({
  declarations: [
    LoginDonorComponent,
    RegisterDonorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
