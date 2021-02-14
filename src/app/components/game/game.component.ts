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

  // p1 = { name: 'joao paulo de araujo porto', thumbnail: 'https://www.w3schools.com/w3images/avatar1.png', score: 0 }
  // p2 = { name: 'paulo', thumbnail: 'https://www.w3schools.com/w3images/avatar2.png', score: 0 }

  campos: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  vez: boolean = (Math.random() >= 0.5)
  classP1: String
  classP2: String

  reiniciarTabuleiro() {
    Array.from(document.getElementsByClassName("campo")).forEach(function (e) {
      e.innerHTML = ''
    })

    this.campos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.vez = (Math.random() >= 0.5)
  }

  velha() {
    alert("VELHA")
    this.reiniciarTabuleiro()
  }

  vitoria(v) {
    if (v) {
      this.p1.score++
      alert("VITÓRIA Player1")
    } else {
      this.p2.score++
      alert("VITÓRIA Player2")
    }
    this.reiniciarTabuleiro()
  }

  verificarCondicoes() {
    if ((this.campos[0] == this.campos[1]) && (this.campos[0] == this.campos[2]) || (this.campos[3] == this.campos[4]) && (this.campos[3] == this.campos[5]) || (this.campos[6] == this.campos[7]) && (this.campos[6] == this.campos[8])) {	//Linhas
      this.vitoria(this.vez)
    }
    if ((this.campos[0] == this.campos[3]) && (this.campos[0] == this.campos[6]) || (this.campos[1] == this.campos[4]) && (this.campos[1] == this.campos[7]) || (this.campos[2] == this.campos[5]) && (this.campos[2] == this.campos[8])) {	//Colunas
      this.vitoria(this.vez)
    }
    if ((this.campos[0] == this.campos[4]) && (this.campos[0] == this.campos[8]) || (this.campos[2] == this.campos[4]) && (this.campos[2] == this.campos[6])) { //Diagonais
      this.vitoria(this.vez)
    }
    if (this.campos.some(e => e > 0) == false) {  //VELHA
      this.velha()
    }
  }

  turno() {
    
    this.vez = !this.vez

    if (this.vez) {
      this.classP2 = 'active'
      this.classP1 = ''
      return 'X'
    } else {
      this.classP2 = ''
      this.classP1 = 'active'
      return 'O'
    }
  }

  campoClick(e) {

    if (e.target.innerText == '') {
      e.target.innerText = this.turno()
      this.campos[e.target.id] = e.target.innerText
      this.verificarCondicoes()
    }
  }

  ngOnInit(): void {
    this.turno()  
  }

}
