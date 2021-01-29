import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() {}

  player1:string = history.state.player1
  player2:string  = history.state.player2

  ngOnInit(): void { 
    

  }

}
