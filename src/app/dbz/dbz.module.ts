import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DBZListComponent } from './components/character-list/dbz-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { TrashIconComponent } from './components/svg/trash-icon/trash-icon.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DBZListComponent,
    AddCharacterComponent,
    TrashIconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
