import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters:Character[]=[{
        id:uuid() ,
        name:'Krillin',
        power:1000
    },
    {
        id:uuid() ,
        name:'Goku',
        power:9500
    },
    {
        id:uuid() ,
        name:'Vegetta',
        power:7500
    }

];
onAddCharacter(character: Character):void{
    const newCharacter:Character={id:uuid(), ...character};
    console.log({newCharacter},"ejemmm");
    
    this.characters.push(newCharacter);
}
onDeleteById(id: string):void{
    //this.character.splice(index,1);
    this.characters =this.characters.filter(character=>character.id!=id);
}


}