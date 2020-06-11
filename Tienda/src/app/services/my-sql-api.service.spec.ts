import { TestBed } from '@angular/core/testing';

import { MySQLApiService } from './my-sql-api.service';

describe('MySQLApiService', () => {
  let service: MySQLApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySQLApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
