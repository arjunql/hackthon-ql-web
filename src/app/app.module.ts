import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { CardsComponent } from './core/components/cards/cards.component';
import { LandingDashboardComponent } from './modules/landing-dashboard/landing-dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { MissionComponent } from './modules/mission/mission.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    LandingDashboardComponent,
    AboutUsComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
