import { TestBed } from '@angular/core/testing';

import { RegistePateintService } from './registe-pateint.service';

describe('RegistePateintService', () => {
  let service: RegistePateintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistePateintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
