import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianMovieInfoComponent } from './asian-movie-info.component';

describe('AsianMovieInfoComponent', () => {
  let component: AsianMovieInfoComponent;
  let fixture: ComponentFixture<AsianMovieInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianMovieInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianMovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
