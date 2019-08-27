import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserLevelComponent } from './select-user-level.component';

describe('SelectUserLevelComponent', () => {
  let component: SelectUserLevelComponent;
  let fixture: ComponentFixture<SelectUserLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
