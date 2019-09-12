import { TestBed, async, inject } from '@angular/core/testing';

import { BuyerOnlyGuard } from './buyer-only.guard';

describe('BuyerOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyerOnlyGuard]
    });
  });

  it('should ...', inject([BuyerOnlyGuard], (guard: BuyerOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
