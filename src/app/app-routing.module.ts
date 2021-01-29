import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { GameComponent } from './components/game/game.component'

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: "personagens",
    component: PersonagensComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
