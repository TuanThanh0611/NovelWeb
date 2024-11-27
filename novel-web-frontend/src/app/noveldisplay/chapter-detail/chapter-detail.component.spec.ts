import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDetailComponent } from './chapter-detail.component';

describe('ChapterDetailComponent', () => {
  let component: ChapterDetailComponent;
  let fixture: ComponentFixture<ChapterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
