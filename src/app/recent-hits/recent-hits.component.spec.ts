import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentHitsComponent } from './recent-hits.component';

describe('RecentHitsComponent', () => {
  let component: RecentHitsComponent;
  let fixture: ComponentFixture<RecentHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentHitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
