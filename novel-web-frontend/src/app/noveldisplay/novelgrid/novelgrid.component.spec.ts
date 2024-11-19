import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelgridComponent } from './novelgrid.component';

describe('NovelgridComponent', () => {
  let component: NovelgridComponent;
  let fixture: ComponentFixture<NovelgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelgridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
