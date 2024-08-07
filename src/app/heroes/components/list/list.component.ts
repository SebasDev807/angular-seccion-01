import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames: string[] = ['Batman', 'Flash', 'Omniman', 'Homelander', 'Invincible'];
  deletedHero?: string


  removeLastHero(): void {
    if(!this.heroNames.length) return;
    this.deletedHero = this.heroNames.pop();

  }
}
