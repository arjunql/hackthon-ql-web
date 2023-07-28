import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/services/master-service.service';
import { ValidationServiceService } from 'src/app/services/validation-service.service';

@Component({
  selector: 'app-post-food-form',
  templateUrl: './post-food-form.component.html',
  styleUrls: ['./post-food-form.component.scss']
})
export class PostFoodFormComponent {
  dynamicForm!: FormGroup;
  postFoodDetail!:FormGroup
  dynamicFields:any =[]
  keyId=0;
  formObject:any={}
  formErrors={}
  isFormSubmitted=false
  public selectedMoments = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];
  constructor(private formBuilder: FormBuilder, private _validation:ValidationServiceService, private masterService:MasterServiceService) {
    this.dynamicForm = this.formBuilder.group({});
  }

  addField(name: string, value: string): void {
      this.dynamicForm.addControl(name, new FormControl(value));
      this.keyId = this.keyId+1
      this.dynamicFields.push({filed_name:'Field Name', value_name:'Value', key:'',value:'',keyId:this.keyId, valId:'val'+ Math.floor(Math.random() * 5)})
      
  }

  removeField(index:number): void {
    this.dynamicFields.splice(index,1)
  }

  initPostFoodDetailForm(){
    this.postFoodDetail = this.formBuilder.group({
      name:['',[Validators.required]],
      food_type:['',[Validators.required]],
      time:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }


  submitFrom(){
    for (let obj of this.dynamicFields) {
      let key = obj.key;
      this.formObject = { ...this.formObject, [key]: obj.value };
    }
  }

  logValidationErrors() {
    console.log('called')
    this.formErrors = this._validation.getValidationErrors(
      this.postFoodDetail,
      this.masterService.getConstant().registerForm,
      this.isFormSubmitted
    );
  }
}
