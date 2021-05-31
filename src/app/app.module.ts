import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TopRecommendationsComponent } from './top-recommendations/top-recommendations.component';
import { Top250MoviesComponent } from './top250-movies/top250-movies.component';
import { Top250TvShowsComponent } from './top250-tv-shows/top250-tv-shows.component';
import { InfoComponent } from './info/info.component';
import { TvInfoComponent } from './tv-info/tv-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    TopRecommendationsComponent,
    Top250MoviesComponent,
    Top250TvShowsComponent,
    InfoComponent,
    TvInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
