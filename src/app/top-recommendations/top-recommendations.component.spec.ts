import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecommendationsComponent } from './top-recommendations.component';

describe('TopRecommendationsComponent', () => {
  let component: TopRecommendationsComponent;
  let fixture: ComponentFixture<TopRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
