import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movieinfo } from './models/top250movies.model';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private hc:HttpClient) { }

  gettop250movies():Observable<movieinfo>
  {
    return this.hc.get<movieinfo>('http://localhost:3000/items')
  }

  gettop250tvshows():Observable<movieinfo>
  {
    return this.hc.get<movieinfo>('http://localhost:3000/items2')
  }

  getRecentHits():Observable<any>
  {
    return this.hc.get<any>('http://localhost:3000/items3')
  }

  getInTheatres():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/items4')
  }

  getTop150AsianMovies():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/items5')
  }

}
