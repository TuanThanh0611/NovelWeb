import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNovelsComponent } from './admin-novels.component';

describe('AdminNovelsComponent', () => {
  let component: AdminNovelsComponent;
  let fixture: ComponentFixture<AdminNovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNovelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
