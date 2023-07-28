import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { PostWasteFoodComponent } from './modules/post-waste-food/post-waste-food.component';
import { PostFoodFormComponent } from './modules/post-waste-food/post-food-form/post-food-form.component';
import { CardsComponent } from './core/components/cards/cards.component';
import { LandingDashboardComponent } from './modules/landing-dashboard/landing-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostWasteFoodComponent,
    PostFoodFormComponent,
    CardsComponent,
    LandingDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
