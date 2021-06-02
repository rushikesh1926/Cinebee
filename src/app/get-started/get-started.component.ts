import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onExploreTopRec()
  {
    this.router.navigateByUrl('toprecommendations')
  }

  onExploreRecHits()
  {
    this.router.navigateByUrl('recenthits')
  }

  onExploreInTheatres()
  {
    this.router.navigateByUrl('inTheatres')
  }

  



}
