import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { oneTimeAutomaticvalidaterequestInterceptor } from './one-time-automaticvalidaterequest.interceptor';

describe('oneTimeAutomaticvalidaterequestInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => oneTimeAutomaticvalidaterequestInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
