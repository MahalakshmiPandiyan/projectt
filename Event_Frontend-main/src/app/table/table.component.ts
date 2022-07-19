import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../service/history';
import { HistoryService } from '../service/history.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  list:History[]=[]
  constructor(private router:Router,private route: ActivatedRoute,private historyService:HistoryService) { }

  ngOnInit(): void {
    this.historyService.getList().subscribe((res)=>{
      this.list=res as History[]
    });
  }
  back()
  {
    this.router.navigate(['/home']);
  }
}