import { PersonagensService } from '../personagens/personagens.service'
import { Component, OnInit } from '@angular/core';
import { Personagem } from './personagens.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {

  players = {
    player1: '',
    player2: ''
  }

  personagens: Personagem[]
  firstSelect: boolean = false
  selecionarPersonagem: boolean = true
  constructor(private personagensService: PersonagensService, private router: Router) { }

  ngOnInit(): void {

    this.personagensService.read().subscribe(res =>{
      this.personagens = res.data.results
    })

    // this.personagens = [
    //   { name: 'joao', thumbnail: 'https://www.w3schools.com/w3images/avatar1.png' },
    //   { name: 'luiz', thumbnail: 'https://www.w3schools.com/w3images/avatar4.png' },
    //   { name: 'pedro', thumbnail: 'https://www.w3schools.com/w3images/avatar5.png' },
    //   { name: 'paulo', thumbnail: 'https://www.w3schools.com/w3images/avatar2.png' },
    //   { name: 'jose', thumbnail: 'https://www.w3schools.com/w3images/avatar3.png' },
    //   { name: 'celso', thumbnail: 'https://www.w3schools.com/w3images/avatar2.png' },
    //   { name: 'henrique', thumbnail: 'https://www.w3schools.com/w3images/avatar6.png' },
    //   { name: 'rodrigo', thumbnail: 'https://www.w3schools.com/w3images/avatar3.png' },
    //   { name: 'mateus', thumbnail: 'https://www.w3schools.com/w3images/avatar5.png' },
    //   { name: 'nicolas', thumbnail: 'https://www.w3schools.com/w3images/avatar3.png' },
    //   { name: 'italo', thumbnail: 'https://www.w3schools.com/w3images/avatar1.png' },
    //   { name: 'rodrigo', thumbnail: 'https://www.w3schools.com/w3images/avatar6.png' },
    //   { name: 'mateus', thumbnail: 'https://www.w3schools.com/w3images/avatar2.png' },
    //   { name: 'icaro', thumbnail: 'https://www.w3schools.com/w3images/avatar1.png' },
    //   { name: 'italo', thumbnail: 'https://www.w3schools.com/w3images/avatar4.png' },
    // ]

  }

  functeste(e) {

    if ((e.target.nodeName == "TD") && (this.selecionarPersonagem == true)) {

      if (this.firstSelect == false) {
        this.firstSelect = true
        this.players.player1 = e.target.id
        document.getElementById("overlay-" + e.target.id).innerText = "X"
      } else {
        this.selecionarPersonagem = false
        this.players.player2 = e.target.id
        document.getElementById("overlay-" + e.target.id).innerText = "O"

        setTimeout(() => {
          this.router.navigateByUrl('/game', { state: this.players })
        }, 3000);
      }

      e.target.className = "selected"
      document.getElementById("overlay-" + e.target.id).style.visibility = "visible"
    }

  }

}
