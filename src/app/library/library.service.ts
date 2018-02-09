import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'mtgsdk/lib/querybuilder';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ICardCollection, ICard } from "./card";


@Injectable()
export class CardService {
    mtg = require('mtgsdk');

    constructor(private _http: HttpClient){}

    getCards(): ICard[] {
        let result: ICard[] = [];

        this.mtg.card.where()
            .on((cards: ICard[]) => {
                result = cards;
            })

        return result;
    }
}