import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'mtg-mana',
  templateUrl: './mana.component.html',
  styleUrls: ['./mana.component.css']
})
export class ManaComponent implements OnChanges {
  @Input() manaCost: string;

  constructor() { }

  ngOnChanges():void {
    this.manaCost = this.manaCost;
  }

  parseManaCost(): void{
    if(!this.manaCost) return;
    let manaCostSplit = this.manaCost.split("[{}]")
    
    for(var mana in manaCostSplit) {
      
    }
  }

}
