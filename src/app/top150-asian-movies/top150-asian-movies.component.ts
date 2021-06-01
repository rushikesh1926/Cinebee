import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-top150-asian-movies',
  templateUrl: './top150-asian-movies.component.html',
  styleUrls: ['./top150-asian-movies.component.css']
})
export class Top150AsianMoviesComponent {

  asianMovieData:any;

  constructor(private dsobj:DataserviceService) { }

  ngOnInit(): void {
    this.dsobj.getTop150AsianMovies().subscribe(
      data=>{
        this.asianMovieData=data;
        console.log(this.asianMovieData)
      },
      err=>{
        console.log("err is",err);
      }
    )
  }

}
