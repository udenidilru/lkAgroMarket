import { TestBed, async, inject } from '@angular/core/testing';

import { AdministratorOnlyGuard } from './administrator-only.guard';

describe('AdministratorOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministratorOnlyGuard]
    });
  });

  it('should ...', inject([AdministratorOnlyGuard], (guard: AdministratorOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
