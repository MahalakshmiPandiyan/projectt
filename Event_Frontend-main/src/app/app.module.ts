import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TableComponent } from './table/table.component';
import { VenueComponent } from './venue/venue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AddtionalFeaturesComponent } from './addtional-features/addtional-features.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EventComponent,
    TableComponent,
    VenueComponent,
    FeaturesComponent,
    OrganiserComponent,
    RegisterComponent,
    FirstPageComponent,
    AddtionalFeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
