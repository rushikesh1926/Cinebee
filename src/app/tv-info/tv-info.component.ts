import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.css']
})
export class TvInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tvshowsobj:any;
}
