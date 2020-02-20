import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityStatsComponent } from './utility-stats.component';

describe('UtilityStatsComponent', () => {
  let component: UtilityStatsComponent;
  let fixture: ComponentFixture<UtilityStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
