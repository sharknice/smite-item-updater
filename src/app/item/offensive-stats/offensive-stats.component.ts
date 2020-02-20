import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offensive-stats',
  templateUrl: './offensive-stats.component.html',
  styleUrls: ['./offensive-stats.component.scss']
})
export class OffensiveStatsComponent implements OnInit {
  @Input() item: any;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
