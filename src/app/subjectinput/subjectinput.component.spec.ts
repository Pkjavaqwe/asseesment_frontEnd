import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectinputComponent } from './subjectinput.component';

describe('SubjectinputComponent', () => {
  let component: SubjectinputComponent;
  let fixture: ComponentFixture<SubjectinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
