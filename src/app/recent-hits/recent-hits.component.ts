import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-recent-hits',
  templateUrl: './recent-hits.component.html',
  styleUrls: ['./recent-hits.component.css']
})
export class RecentHitsComponent implements OnInit {

  searchTerm:any;
  recentHitsData:any;
  constructor(private dsobj:DataserviceService) { }

  ngOnInit(): void {
    this.dsobj.getRecentHits().subscribe(
      data=>{
      this.recentHitsData=data;
      },
      err=>{
        console.log("err is",err)
      }
    )
  }




}
