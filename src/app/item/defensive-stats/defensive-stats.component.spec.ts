import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensiveStatsComponent } from './defensive-stats.component';

describe('DefensiveStatsComponent', () => {
  let component: DefensiveStatsComponent;
  let fixture: ComponentFixture<DefensiveStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensiveStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensiveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
