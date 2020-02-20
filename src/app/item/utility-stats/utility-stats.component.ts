import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utility-stats',
  templateUrl: './utility-stats.component.html',
  styleUrls: ['./utility-stats.component.scss']
})
export class UtilityStatsComponent implements OnInit {
  @Input() item: any;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
