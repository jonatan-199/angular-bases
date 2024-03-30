import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl:  './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

@Output()
public onDeleteId:EventEmitter<string>=new EventEmitter();

public DeleteCharacter(idx?:string):void{
  if( !idx ) return;
  console.log({idx});
  this.onDeleteId.emit(idx)
}

}
