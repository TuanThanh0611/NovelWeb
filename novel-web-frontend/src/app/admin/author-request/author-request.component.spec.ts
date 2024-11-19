import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorRequestComponent } from './author-request.component';

describe('AuthorRequestComponent', () => {
  let component: AuthorRequestComponent;
  let fixture: ComponentFixture<AuthorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
