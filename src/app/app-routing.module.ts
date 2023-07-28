import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(auth =>auth.AuthModule)
  },
  {
    path:'food-info',
    loadChildren:() => import('./modules/post-waste-food/post-waste-food.module').then(post => post.PostWasteFoodModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
