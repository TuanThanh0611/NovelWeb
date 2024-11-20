import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNovelComponent } from './create-novel.component';

describe('CreateNovelComponent', () => {
  let component: CreateNovelComponent;
  let fixture: ComponentFixture<CreateNovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNovelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
