import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayEventService } from '../display-event.service';
import { display_event } from '../display_event';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent implements OnInit {
  displayEvent:display_event[]=[]
  token:any=''
  lengthToken:any
  error: any;

  constructor(private router:Router,private route: ActivatedRoute,private displayService:DisplayEventService) { }

  ngOnInit(): void {
    this.displayService.getList().subscribe((res)=>{
      this.displayEvent=res as display_event[]
      console.log(JSON.stringify(res));
      this.token=localStorage.getItem('token')
      this.lengthToken=this.token.length

      console.log("token : "+this.token);
      console.log("lentoken : "+this.lengthToken);

      
    });
  }
  
  backButton(){
    this.router.navigate(['/first'])
  }
  delete(_id:string){
    if (confirm('Are you sure to delete this record ?') == true) {
    this.displayService.deleteUserId(_id).subscribe((res) => {
      console.log(res);  
    });
    this.displayService.getList().subscribe((res)=>{
      this.displayEvent=res as display_event[]
      console.log(JSON.stringify(res));
    },
    (err) => {
      this.error = err.message;
      alert(err.error.message)

    });
  }
  }

}
