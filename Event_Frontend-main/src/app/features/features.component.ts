import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Features } from '../features';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featuresList:Features[]=[]

  constructor(private router:Router,private route: ActivatedRoute,private featureService:FeaturesService) { }

  ngOnInit(): void {
    // this.featuresList=this.featureService.getUsers();
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
      console.log(JSON.stringify(res));
      
    });
  }
  back()
  {
    this.router.navigate(['/home']);

  }

  addFeatures()
  {
    this.router.navigate(['/edit']);
  }
}
