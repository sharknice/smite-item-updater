import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffensiveStatsComponent } from './offensive-stats.component';

describe('OffensiveStatsComponent', () => {
  let component: OffensiveStatsComponent;
  let fixture: ComponentFixture<OffensiveStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffensiveStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffensiveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
