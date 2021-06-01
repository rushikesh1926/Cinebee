import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asian-movie-info',
  templateUrl: './asian-movie-info.component.html',
  styleUrls: ['./asian-movie-info.component.css']
})
export class AsianMovieInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() asianMovieObj:any;

}
