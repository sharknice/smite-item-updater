import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() delete = new EventEmitter();
  @Output() duplicate = new EventEmitter();

  stacks: boolean;
  enemyInAura: boolean;
  toggleStats: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.item.stacks) {
      this.stacks = true;
    } else {
      this.stacks = false;
    }

    if(this.item.enemyInAura) {
      this.enemyInAura = true;
    } else {
      this.enemyInAura = false;
    }
    
    if (this.item.toggleStats) {
      this.toggleStats = true;
    } else {
      this.toggleStats = false;
    }
  }

  deleteItem() {
    this.delete.emit();
  }

  duplicateItem() {
    this.duplicate.emit();
  }

  onTypeChange(type) {
    if (type === 'Physical' && this.item.magicalPower) {
      this.item.physicalPower = this.item.magicalPower;
      delete this.item.magicalPower;
    } else if (this.item.physicalPower) {
      this.item.magicalPower = this.item.physicalPower;
      delete this.item.physicalPower;
    }
  }

  onTierChange(tier) {
    if (tier && tier === 3) {
      delete this.item.autobuilder;
    }
  }

  onStacksChange(hasStacks) {
    if (hasStacks) {
      this.item.stacks = { current: 0, max: 0, stacks: {}, type: "temporary" };
    } else {
      delete this.item.stacks;
    }
  }

  onEnemyInAuraChange(hasAura) {
    if (hasAura) {
      this.item.enemyInAura = { toggle: true };
    } else {
      delete this.item.enemyInAura;
    }
  }

  updateStacksCurrent(type) {
    if (type === 'temporary') {
      this.item.stacks.current = 0;
    } else {
      this.item.stacks.current = this.item.stacks.max;
    }
  }

  onToggleStatsChange(hasToggle) {
    if (hasToggle) {
      this.item.toggleStats = { toggle: false };
    } else {
      delete this.item.toggleStats;
    }
  }
}
