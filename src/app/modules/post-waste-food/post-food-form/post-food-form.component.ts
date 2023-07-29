import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/services/master-service.service';
import { ValidationServiceService } from 'src/app/services/validation-service.service';

@Component({
  selector: 'app-post-food-form',
  templateUrl: './post-food-form.component.html',
  styleUrls: ['./post-food-form.component.scss']
})
export class PostFoodFormComponent implements OnInit {
  
  postFoodDetail!:FormGroup
  dynamicFields:any =[]
  keyId=0;
  formObject:any={}
  formErrors={}
  isFormSubmitted=false
  datePickerConfig = {
    format: 'DD-MM-YYYY'
  };
  selectedDate:string=''
  selectedTime:string=''
  public selectedMoments = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];
  constructor(private formBuilder: FormBuilder, private _validation:ValidationServiceService, private masterService:MasterServiceService) {
    // this.dynamicForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initPostFoodDetailForm()
  }
  // addField(name: string, value: string): void {
  //     this.dynamicForm.addControl(name, new FormControl(value));
  //     this.keyId = this.keyId+1
  //     this.dynamicFields.push({filed_name:'Field Name', value_name:'Value', key:'',value:'',keyId:this.keyId, valId:'val'+ Math.floor(Math.random() * 5)})
      
  // }

  // removeField(index:number): void {
  //   this.dynamicFields.splice(index,1)
  // }

  initPostFoodDetailForm(){
    this.postFoodDetail = this.formBuilder.group({
      name:['',[Validators.required]],
      food_type:['0',[Validators.required]],
      time:['',[Validators.required]],
      address:['',[Validators.required]],
      description:['']
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
  submit(){
    console.log(this.selectedDate,this.selectedTime)
  }
  changeDate(event:any){
    console.log(event.date())
  }
  changeTime(event:any){
    console.log(event)
  }
}
