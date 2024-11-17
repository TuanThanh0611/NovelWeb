import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelcardComponent } from './novelcard.component';

describe('NovelcardComponent', () => {
  let component: NovelcardComponent;
  let fixture: ComponentFixture<NovelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
