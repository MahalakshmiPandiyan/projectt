import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back()
  {
    this.router.navigate(['/first']);

  }
}