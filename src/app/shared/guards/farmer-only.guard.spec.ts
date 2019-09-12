import { TestBed, async, inject } from '@angular/core/testing';

import { FarmerOnlyGuard } from './farmer-only.guard';

describe('FarmerOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerOnlyGuard]
    });
  });

  it('should ...', inject([FarmerOnlyGuard], (guard: FarmerOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
