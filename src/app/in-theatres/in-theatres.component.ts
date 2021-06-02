import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-in-theatres',
  templateUrl: './in-theatres.component.html',
  styleUrls: ['./in-theatres.component.css']
})
export class InTheatresComponent implements OnInit {

  searchTerm:any;
  InTheatresData:any;
  constructor(private dsobj:DataserviceService) { }

  ngOnInit(): void {
    this.dsobj.getInTheatres().subscribe(
      data=>{
        this.InTheatresData=data;
      },
      err=>{
        console.log("err is",err)
      }
    )

  }



}
