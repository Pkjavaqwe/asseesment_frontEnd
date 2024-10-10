import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioninputComponent } from './questioninput.component';

describe('QuestioninputComponent', () => {
  let component: QuestioninputComponent;
  let fixture: ComponentFixture<QuestioninputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestioninputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestioninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
