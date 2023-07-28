import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/services/master-service.service';
import { ValidationServiceService } from 'src/app/services/validation-service.service';

@Component({
  selector: 'app-register-doner',
  templateUrl: './register-doner.component.html',
  styleUrls: ['./register-doner.component.scss'],
})
export class RegisterDonorComponent implements OnInit {
  registerDonorForm!: FormGroup;
  formErrors: any = {};
  isFormSubmitted = false;
  constructor(
    private _fb: FormBuilder,
    private masterService: MasterServiceService,
    private _validation: ValidationServiceService
  ) {}
  ngOnInit(): void {
    this.intiRegisterForm();
  }

  intiRegisterForm() {
    this.registerDonorForm = this._fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.masterService.getConstant().validationRegex.whiteSpace
          ),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.masterService.getConstant().validationRegex.email
          ),
        ],
      ],
      password: ['', [Validators.required,Validators.pattern(
        this.masterService.getConstant().validationRegex.whiteSpace
      ),]],
      address: ['', [Validators.required,Validators.pattern(
        this.masterService.getConstant().validationRegex.whiteSpace
      ),]],
      user_type: [1],
      contact: ['', [Validators.required,Validators.pattern(
        this.masterService.getConstant().validationRegex.whiteSpace
      ),]],
    });
  }

  submitRegisterDonorFormData() {
    console.log(this.registerDonorForm.value);
  }

  logValidationErrors() {
    console.log('called')
    this.formErrors = this._validation.getValidationErrors(
      this.registerDonorForm,
      this.masterService.getConstant().registerForm,
      this.isFormSubmitted
    );

    console.log(this.formErrors)
  }
}
