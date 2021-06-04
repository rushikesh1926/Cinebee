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
import { RecentHitsComponent } from './recent-hits/recent-hits.component';
import { InTheatresComponent } from './in-theatres/in-theatres.component';
import { Top150AsianMoviesComponent } from './top150-asian-movies/top150-asian-movies.component';
import { AsianMovieInfoComponent } from './asian-movie-info/asian-movie-info.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import { DummyComponent } from './dummy/dummy.component'

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
    TvInfoComponent,
    RecentHitsComponent,
    InTheatresComponent,
    Top150AsianMoviesComponent,
    AsianMovieInfoComponent,
    SearchPipe,
    RegisterComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
