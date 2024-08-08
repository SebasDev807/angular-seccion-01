import { Component, EventEmitter, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //Emitir desde un componente hijo
  @Output()
  public onNewCharacter: EventEmitter<DBZCharacter> = new EventEmitter();

  public character: DBZCharacter = { name: '', power: 0};

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
