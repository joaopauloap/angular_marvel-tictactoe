import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { GameComponent } from './components/game/game.component'
import { AuthGuard } from './components/game/game.authguard.service';

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
    canActivate: [AuthGuard],
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
