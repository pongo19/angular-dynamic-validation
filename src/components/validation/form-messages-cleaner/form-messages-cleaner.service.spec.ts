import { TestBed, inject } from '@angular/core/testing';

import { FormMessagesCleanerService } from './form-messages-cleaner.service';

describe('FormMessagesCleanerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormMessagesCleanerService]
    });
  });

  it('should be created', inject([FormMessagesCleanerService], (service: FormMessagesCleanerService) => {
    expect(service).toBeTruthy();
  }));
});
