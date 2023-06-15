import { TestBed } from '@angular/core/testing';

import { ElectronicItemsService } from './electronic-items.service';

describe('ElectronicItemsService', () => {
  let service: ElectronicItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
