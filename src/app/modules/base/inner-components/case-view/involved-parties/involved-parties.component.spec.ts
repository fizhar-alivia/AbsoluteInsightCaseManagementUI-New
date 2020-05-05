import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedPartiesComponent } from './involved-parties.component';

describe('InvolvedPartiesComponent', () => {
  let component: InvolvedPartiesComponent;
  let fixture: ComponentFixture<InvolvedPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
