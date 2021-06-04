import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsianMovieInfoComponent } from './asian-movie-info/asian-movie-info.component';
import { DummyComponent } from './dummy/dummy.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { InTheatresComponent } from './in-theatres/in-theatres.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecentHitsComponent } from './recent-hits/recent-hits.component';
import { RegisterComponent } from './register/register.component';
import { TopRecommendationsComponent } from './top-recommendations/top-recommendations.component';
import { Top150AsianMoviesComponent } from './top150-asian-movies/top150-asian-movies.component';
import { Top250MoviesComponent } from './top250-movies/top250-movies.component';
import { Top250TvShowsComponent } from './top250-tv-shows/top250-tv-shows.component';

const routes: Routes = [
  {path:'dummy',component:DummyComponent},
  {path:'home',component:HomeComponent},
  {path:'getstarted',component:GetStartedComponent},
  {path:'login',component:LoginComponent},
  {path:'recenthits',component:RecentHitsComponent},
  {path:'inTheatres',component:InTheatresComponent},
  {path:'register',component:RegisterComponent},
  {path:'toprecommendations',component:TopRecommendationsComponent ,children:[
    {path:'top250movies',component:Top250MoviesComponent},
    {path:'top250tvshows',component:Top250TvShowsComponent},
    {path:'top150asian',component:Top150AsianMoviesComponent},
    {path:'',redirectTo:'/toprecommendations/top250movies',pathMatch:'full'},
  ]},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
