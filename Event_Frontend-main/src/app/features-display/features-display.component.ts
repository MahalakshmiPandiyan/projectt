import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Features } from '../features';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-features-display',
  templateUrl: './features-display.component.html',
  styleUrls: ['./features-display.component.scss']
})
export class FeaturesDisplayComponent implements OnInit {
  featuresList:Features[]=[]

  constructor(private router:Router,private route: ActivatedRoute,private featureService:FeaturesService) { }

  ngOnInit(): void {
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
      console.log(JSON.stringify(res));
    });
  }
  back()
  {
    this.router.navigate(['/home']);

  }

}
