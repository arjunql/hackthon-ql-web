import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { MasterServiceService } from 'src/app/services/master-service.service';
import { ValidationServiceService } from 'src/app/services/validation-service.service';
@Component({
  selector: 'app-login-doner',
  templateUrl: './login-doner.component.html',
  styleUrls: ['./login-doner.component.scss']
})
export class LoginDonerComponent implements OnInit {
  loginForm!:FormGroup
  formErrors:any={}
  isFormSubmitted=false
  constructor(private masterService:MasterServiceService, private _fb:FormBuilder, private _validation:ValidationServiceService){

  }
  ngOnInit(): void {
    this.initLoginForm()
  }
  initLoginForm(){
    this.loginForm = this._fb.group({
      email:['',[Validators.required,Validators.pattern(this.masterService.getConstant().validationRegex.email)]],
      password:['',[Validators.required,Validators.pattern(this.masterService.getConstant().validationRegex.whiteSpace)]]
    })
  }
  logValidationErrors() {
    console.log('called')
    this.formErrors = this._validation.getValidationErrors(
      this.loginForm,
      this.masterService.getConstant().registerForm,
      this.isFormSubmitted
    );
  }
}
