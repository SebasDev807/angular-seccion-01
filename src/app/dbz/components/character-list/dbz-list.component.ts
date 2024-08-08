import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbz-character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DBZListComponent {

  constructor(private dbzService: DbzService) { }

  @Input()
  characterList: DBZCharacter[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;

    console.log({ id });

    this.onDelete.emit(id);
  }
}
