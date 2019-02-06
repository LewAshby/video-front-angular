/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SIPAjaxLoaderService } from '../services/ajax-loader.service';

describe('Service: AjaxLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SIPAjaxLoaderService]
    });
  });

  it('should ...', inject([SIPAjaxLoaderService], (service: SIPAjaxLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
