import { Component, OnInit } from '@angular/core';
import { CardService } from './library.service';
import { ICard } from './card';

@Component({
  selector: 'mtg-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  mtgCards: ICard[] = [];

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this.mtgCards = this._cardService.getCards();
  }

  translateManaToImages() {
    for(var i = 0; i < this.mtgCards.length; i++){
      if(!this.mtgCards[i].manaCost) continue;
      let manaCostSplit = this.mtgCards[i].manaCost.split(/[{}]+/);

      var imageUrls: string [] = [];

      for(let mana of manaCostSplit){
        switch(mana) {
          case "W": { imageUrls.push('assets/whiteMana.png'); break; }
          case "B": { imageUrls.push('assets/blackMana.png'); break; }
          case "R": { imageUrls.push('assets/redMana.png'); break; }
          case "U": { imageUrls.push('assets/blueMana.png'); break; }
          case "G": { imageUrls.push('assets/greenMana.png'); break; }
          default:
        }
      }
        
        this.mtgCards[i].manaImages = imageUrls;
    }
  }
}
