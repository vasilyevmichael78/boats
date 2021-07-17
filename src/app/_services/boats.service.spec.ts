/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoatsService } from './boats.service';

describe('Service: Boats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoatsService]
    });
  });

  it('should ...', inject([BoatsService], (service: BoatsService) => {
    expect(service).toBeTruthy();
  }));
});
