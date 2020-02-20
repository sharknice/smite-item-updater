import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-defensive-stats',
  templateUrl: './defensive-stats.component.html',
  styleUrls: ['./defensive-stats.component.scss']
})
export class DefensiveStatsComponent implements OnInit {
  @Input() item: any;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
