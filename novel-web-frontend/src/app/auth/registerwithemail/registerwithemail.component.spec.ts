import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwithemailComponent } from './registerwithemail.component';

describe('RegisterwithemailComponent', () => {
  let component: RegisterwithemailComponent;
  let fixture: ComponentFixture<RegisterwithemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterwithemailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterwithemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
