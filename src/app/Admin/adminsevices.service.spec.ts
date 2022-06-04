import { TestBed } from '@angular/core/testing';

import { AdminsevicesService } from './adminsevices.service';

describe('AdminsevicesService', () => {
  let service: AdminsevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
