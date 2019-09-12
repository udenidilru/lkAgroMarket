import { TestBed, async, inject } from '@angular/core/testing';

import { SuperAdminOnlyGuard } from './super-admin-only.guard';

describe('SuperAdminOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperAdminOnlyGuard]
    });
  });

  it('should ...', inject([SuperAdminOnlyGuard], (guard: SuperAdminOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
