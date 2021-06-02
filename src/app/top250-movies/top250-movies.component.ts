import { Component, OnInit ,Input} from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { movieinfo } from '../models/top250movies.model';


@Component({
  selector: 'app-top250-movies',
  templateUrl: './top250-movies.component.html',
  styleUrls: ['./top250-movies.component.css']
})
export class Top250MoviesComponent{
  
  p=1;
  searchTerm:any;
  moviedata:any;
  constructor(private dsObj:DataserviceService) { }
  
  ngOnInit(): void { 
    this.dsObj.gettop250movies().subscribe(
      data=>{
        this.moviedata=data;
        console.log(data)
      },
      err=>{
        console.log("err is",err)
      }
    )
   }

  

}
