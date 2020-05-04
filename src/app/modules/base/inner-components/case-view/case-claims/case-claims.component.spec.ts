import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseClaimsComponent } from './case-claims.component';

describe('CaseClaimsComponent', () => {
  let component: CaseClaimsComponent;
  let fixture: ComponentFixture<CaseClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
