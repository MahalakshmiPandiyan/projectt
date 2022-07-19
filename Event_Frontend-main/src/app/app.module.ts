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
import { OrganiserComponent } from './organiser/organiser.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AddtionalFeaturesComponent } from './addtional-features/addtional-features.component';
import { LoginService } from './service/login.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EventDisplayComponent } from './event-display/event-display.component';
import { FeaturesDisplayComponent } from './features-display/features-display.component';
import { AddEventDetailsComponent } from './add-event-details/add-event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EventComponent,
    TableComponent,
    VenueComponent,
    OrganiserComponent,
    RegisterComponent,
    FirstPageComponent,
    AddtionalFeaturesComponent,
    EventDisplayComponent,
    FeaturesDisplayComponent,
    AddEventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
