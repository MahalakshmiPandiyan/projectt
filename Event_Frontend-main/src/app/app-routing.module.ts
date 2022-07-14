import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { FeaturesComponent } from './features/features.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { VenueComponent } from './venue/venue.component';
import { AddtionalFeaturesComponent } from './addtional-features/addtional-features.component';
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { FeaturesDisplayComponent } from './features-display/features-display.component';
import { AddEventDetailsComponent } from './add-event-details/add-event-details.component';

const routes: Routes = [
  {path:'',component:FirstPageComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'venue',component:VenueComponent},
  {path:'table',component:TableComponent,canActivate:[AuthGuard]},
  {path:'event',component:EventComponent,canActivate:[AuthGuard]},
  {path:'features',component:FeaturesComponent,canActivate:[AuthGuard]},
  {path:'edit',component:AddtionalFeaturesComponent,canActivate:[AuthGuard]},
  {path:'update-add/:_id',component:AddtionalFeaturesComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'organizer',component:OrganiserComponent,canActivate:[AuthGuard]},
  {path:'update-edit/:_id',component:EventComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'first',component:FirstPageComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'event_display',component:EventDisplayComponent},
  {path:'features_display',component:FeaturesDisplayComponent},
  {path:'addEventDetails',component:AddEventDetailsComponent},
  {path:'editEventDetails/:_id',component:AddEventDetailsComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }