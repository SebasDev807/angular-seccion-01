import { Component } from '@angular/core';
import { DBZCharacter } from '../interfaces/dbz-character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  onNewCharacter(character: DBZCharacter) {
    this.dbzService.AddCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  get characters(): DBZCharacter[] {
    return [...this.dbzService.characters]

  }

}
