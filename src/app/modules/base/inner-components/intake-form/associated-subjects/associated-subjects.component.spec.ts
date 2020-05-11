import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedSubjectsComponent } from './associated-subjects.component';

describe('AssociatedSubjectsComponent', () => {
  let component: AssociatedSubjectsComponent;
  let fixture: ComponentFixture<AssociatedSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
