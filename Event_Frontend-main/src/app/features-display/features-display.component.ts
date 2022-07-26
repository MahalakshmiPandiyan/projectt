import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Features } from '../service/features';
import { FeaturesService } from '../service/features.service';

@Component({
  selector: 'app-features-display',
  templateUrl: './features-display.component.html',
  styleUrls: ['./features-display.component.scss']
})
export class FeaturesDisplayComponent implements OnInit {
  featuresList:Features[]=[]
  token: any;
  lengthToken: number=0;
  error: string='';

  constructor(private featureService:FeaturesService,private router:Router) { }

  ngOnInit(): void {
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
    });
    this.token=localStorage.getItem('token')
    this.lengthToken=this.token.length

  }

  delete(_id:string){
    if (confirm('Are you sure to delete this record ?') == true) {
    this.featureService.deleteUserId(_id).subscribe((res) => {
    });
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
    },
    (err) => {
      this.error = err.message;
      alert(err.error.message)
    });
    this.router.navigate(['/home'])

  }
  }

}
