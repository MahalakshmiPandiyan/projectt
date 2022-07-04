import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

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
    console.log(this.role);
    
  }
  history(){
    this.router.navigate(['/table']);
  }
  event(){
    this.router.navigate(['/event']);
  }
  edit(){
    this.router.navigate(['/features']);
  }
  logout(){
    this.router.navigate(['/first']); 
  }
  organizer(){
    this.router.navigate(['/organizer']); 
  }
}