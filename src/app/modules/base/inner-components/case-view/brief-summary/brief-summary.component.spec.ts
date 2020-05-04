import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefSummaryComponent } from './brief-summary.component';

describe('BriefSummaryComponent', () => {
  let component: BriefSummaryComponent;
  let fixture: ComponentFixture<BriefSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
