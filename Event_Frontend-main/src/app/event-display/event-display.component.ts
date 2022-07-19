import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayEventService } from '../service/display-event.service';
import { display_event } from '../service/display_event';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent implements OnInit {
  displayEvent:display_event[]=[]
  token:any=''
  lengthToken:number=0
  error: string='';

  constructor(private router:Router,private route: ActivatedRoute,private displayService:DisplayEventService) { }

  ngOnInit(): void {
    this.displayService.getList().subscribe((res)=>{
      this.displayEvent=res as display_event[]
      this.token=localStorage.getItem('token')
      this.lengthToken=this.token.length 
    });
  }
  
  backButton(){
    this.router.navigate(['/first'])
  }
  delete(_id:string){
    if (confirm('Are you sure to delete this record ?') == true) {
    this.displayService.deleteUserId(_id).subscribe((res) => {
    });
    this.displayService.getList().subscribe((res)=>{
      this.displayEvent=res as display_event[]
    },
    (err) => {
      this.error = err.message;
      alert(err.error.message)
    });
  }
  }

}
