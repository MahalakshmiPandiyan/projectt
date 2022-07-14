import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login']); 
  }
  about(){
    this.router.navigate(['/venue']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  features(){
    this.router.navigate(['/features_display']);
  }
  event(){
    this.router.navigate(['/event_display']);
  }
}
