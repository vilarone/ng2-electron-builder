/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElectronEventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronEventService]
    });
  });

  it('should ...', inject([ElectronEventService], (service: ElectronEventService) => {
    expect(service).toBeTruthy();
  }));
});
