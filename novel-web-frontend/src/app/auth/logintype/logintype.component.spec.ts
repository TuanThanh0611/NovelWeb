import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintypeComponent } from './logintype.component';

describe('LogintypeComponent', () => {
  let component: LogintypeComponent;
  let fixture: ComponentFixture<LogintypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogintypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogintypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
