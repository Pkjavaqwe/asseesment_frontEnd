import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperinputComponent } from './paperinput.component';

describe('PaperinputComponent', () => {
  let component: PaperinputComponent;
  let fixture: ComponentFixture<PaperinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaperinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
