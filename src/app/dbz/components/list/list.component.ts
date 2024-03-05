import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input('arreglo')
  public characterList: Character[] = [{
    id: '123',
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    //TODO Emitir el id del personaje
    if(!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }
}
