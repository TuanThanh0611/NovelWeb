import { TestBed } from '@angular/core/testing';
import {AdminNovelService} from './admin-novel.service';


describe('AdminProductService', () => {
  let service: AdminNovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
