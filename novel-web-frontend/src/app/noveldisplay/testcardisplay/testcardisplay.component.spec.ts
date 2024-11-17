import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcardisplayComponent } from './testcardisplay.component';

describe('TestcardisplayComponent', () => {
  let component: TestcardisplayComponent;
  let fixture: ComponentFixture<TestcardisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestcardisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcardisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
