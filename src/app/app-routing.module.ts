import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TopRecommendationsComponent } from './top-recommendations/top-recommendations.component';
import { Top250MoviesComponent } from './top250-movies/top250-movies.component';
import { Top250TvShowsComponent } from './top250-tv-shows/top250-tv-shows.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'getstarted',component:GetStartedComponent},
  {path:'login',component:LoginComponent},
  {path:'toprecommendations',component:TopRecommendationsComponent ,children:[
    {path:'top250movies',component:Top250MoviesComponent},
    {path:'top250tvshows',component:Top250TvShowsComponent},
    {path:'',redirectTo:'/toprecommendations/top250movies',pathMatch:'full'}
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
