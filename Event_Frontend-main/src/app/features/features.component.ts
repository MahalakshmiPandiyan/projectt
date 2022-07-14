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
  error:any

  constructor(private router:Router,private route: ActivatedRoute,private featureService:FeaturesService) { }

  ngOnInit(): void {
    // this.featuresList=this.featureService.getUsers();
    this.featureService.getList().subscribe((res)=>{
      this.featuresList=res as Features[]
      console.log(JSON.stringify(res));
    });
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
  back()
  {
    this.router.navigate(['/home']);

  }

}
