import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaRecommendationModalComponent } from './ta-recommendation-modal.component';

describe('TaRecommendationModalComponent', () => {
  let component: TaRecommendationModalComponent;
  let fixture: ComponentFixture<TaRecommendationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaRecommendationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaRecommendationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
