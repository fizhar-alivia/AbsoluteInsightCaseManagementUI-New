import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySubjectComponent } from './primary-subject.component';

describe('PrimarySubjectComponent', () => {
  let component: PrimarySubjectComponent;
  let fixture: ComponentFixture<PrimarySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
