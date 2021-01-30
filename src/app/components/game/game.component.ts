import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  p1 = history.state.player1
  p2 = history.state.player2

  campos: Array<number> = [1,2,3,4,5,6,7,8,9]

  ngOnInit(): void {

  }

}
