import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { DBZCharacter } from '../interfaces/dbz-character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {


  public characters: DBZCharacter[] = [

    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },

    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },

    {
      id: uuid(),
      name: 'vergueta',
      power: 95000
    }

  ]

  AddCharacter(character: DBZCharacter): void {
    this.characters.push({
      id: uuid(),
      ...character
    });
  }


  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id?: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
