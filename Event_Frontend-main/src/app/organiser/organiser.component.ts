import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from '../history.service';
import { History } from '../history';
import { UserService } from '../user.service';


@Component({
  selector: 'app-organiser',
  templateUrl: './organiser.component.html',
  styleUrls: ['./organiser.component.scss']
})
export class OrganiserComponent implements OnInit {

  list:History[]=[]
  constructor(private router:Router,private route: ActivatedRoute,private historyService:HistoryService,private userService:UserService) { }
  role:string=''
  ngOnInit(): void {
    this.role=this.userService.role;
    this.historyService.getList().subscribe((res)=>{
      this.list=res as History[]

      console.log("list : "+JSON.stringify(res));
      
    });  }
  back()
  {
    this.router.navigate(['/home']);
  }
}
