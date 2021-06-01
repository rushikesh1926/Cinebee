import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top150AsianMoviesComponent } from './top150-asian-movies.component';

describe('Top150AsianMoviesComponent', () => {
  let component: Top150AsianMoviesComponent;
  let fixture: ComponentFixture<Top150AsianMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top150AsianMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top150AsianMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
