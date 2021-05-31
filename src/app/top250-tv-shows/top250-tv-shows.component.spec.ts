import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250TvShowsComponent } from './top250-tv-shows.component';

describe('Top250TvShowsComponent', () => {
  let component: Top250TvShowsComponent;
  let fixture: ComponentFixture<Top250TvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top250TvShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top250TvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
