import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-top250-tv-shows',
  templateUrl: './top250-tv-shows.component.html',
  styleUrls: ['./top250-tv-shows.component.css']
})
export class Top250TvShowsComponent implements OnInit {

  p=1;
  searchTerm:any;
  tvShowData:any;
  constructor(private dsObj:DataserviceService) { }

  ngOnInit(): void {
    this.dsObj.gettop250tvshows().subscribe(
      data=>{
        this.tvShowData=data;
        console.log(data)
      },
      err=>{
        console.log("err is",err)
      }
    )
  }

}
