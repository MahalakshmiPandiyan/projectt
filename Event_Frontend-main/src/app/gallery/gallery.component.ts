import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

   select:string=''
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  close(){
    this.select='true'
  }
  backButton(){
    this.router.navigate(['/first'])
  }
}
