import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,private userService:UserService) { }

  role:string=''
  ngOnInit(): void {
    this.role=this.userService.role;    
    console.log("this.role"+this.role);
    
  }
  history(){
    this.router.navigate(['/table']);
  }
  event(){
    this.router.navigate(['/event']);
  }
  edit(){
    this.router.navigate(['/features_display']);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/first']); 
  }
  organizer(){
    this.router.navigate(['/organizer']); 
  }

  addFeatures()
  {
    this.router.navigate(['/edit']);
  }

  editEventDetails()
  {
    this.router.navigate(['/event_display']);
  }
  addEventDetails()
  {
    this.router.navigate(['/addEventDetails']);
  }
}