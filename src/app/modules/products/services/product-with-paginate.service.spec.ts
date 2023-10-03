import { TestBed } from '@angular/core/testing';

import { ProductWithPaginateService } from './product-with-paginate.service';

describe('ProductWithPaginateService', () => {
  let service: ProductWithPaginateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductWithPaginateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
