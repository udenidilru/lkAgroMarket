import { TestBed, async, inject } from '@angular/core/testing';

import { AuthReverseGuard } from './auth-reverse.guard';

describe('AuthReverseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthReverseGuard]
    });
  });

  it('should ...', inject([AuthReverseGuard], (guard: AuthReverseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
