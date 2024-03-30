import { Character } from '../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl:'./main-page.component.html'
})


export class MainPageComponent {
    //[x: string]: Character[];

    constructor( private dbzService:DbzService ){}
 
    get charactersSvc(): Character[]{
        return [...this.dbzService.characters];
    }
    onDeleteByIdMCP(itm:string):void {
        this.dbzService.onDeleteById(itm);
    }
    onAddCharacterMCP(character:Character):void{
        this.dbzService.onAddCharacter(character);
    }
}