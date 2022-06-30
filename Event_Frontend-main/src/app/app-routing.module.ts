import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EventComponent } from './event/event.component';
import { FeaturesComponent } from './features/features.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  {path:'',component:FirstPageComponent},
  {path:'home',component:HomeComponent},
  {path:'venue',component:VenueComponent},
  {path:'table',component:TableComponent},
  {path:'event',component:EventComponent},
  {path:'features',component:FeaturesComponent},
  {path:'edit',component:EditComponent},
  {path:'update-add/:_id',component:EditComponent},
  {path:'login',component:LoginComponent},
  {path:'organizer',component:OrganiserComponent},
  {path:'update-edit/:_id',component:EventComponent},
  {path:'register',component:RegisterComponent},
  {path:'first',component:FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }