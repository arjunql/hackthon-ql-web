import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { PostWasteFoodRoutingModule } from './post-waste-food-routing.module';
import { PostFoodFormComponent } from './post-food-form/post-food-form.component';
import { PostWasteFoodComponent } from './post-waste-food.component';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';


@NgModule({
  declarations: [PostFoodFormComponent,PostWasteFoodComponent],
  imports: [
    CommonModule,
    PostWasteFoodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
  ]
})
export class PostWasteFoodModule { }
