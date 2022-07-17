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
  token: any;
  lengthToken: any;
  error: any;

  constructor(private router:Router,private route: ActivatedRoute,private featureService:FeaturesService) { }

  ngOnInit(): void {
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
      console.log(JSON.stringify(res));
    });
    this.token=localStorage.getItem('token')
    this.lengthToken=this.token.length

  }

  delete(_id:string){
    if (confirm('Are you sure to delete this record ?') == true) {
    this.featureService.deleteUserId(_id).subscribe((res) => {
      console.log(res);  
    });
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
      console.log(JSON.stringify(res));
    },
    (err) => {
      this.error = err.message;
      alert(err.error.message)

    });
  }
  }

}
