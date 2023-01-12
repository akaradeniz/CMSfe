import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommendInputComponent } from './commend-input.component';

describe('CommendInputComponent', () => {
  let component: CommendInputComponent;
  let fixture: ComponentFixture<CommendInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommendInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
