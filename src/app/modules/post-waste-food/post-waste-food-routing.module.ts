import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFoodFormComponent } from './post-food-form/post-food-form.component';

const routes: Routes = [
  {
    path:'fill-details',
    component:PostFoodFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostWasteFoodRoutingModule { }
